import flatpickr from 'flatpickr';
import type { Instance } from 'flatpickr/dist/types/instance';
import type { Options } from 'flatpickr/dist/types/options';

const pickerByInput = new WeakMap<HTMLInputElement, Instance>();

function todayIso(): string {
	return new Date().toISOString().split('T')[0]!;
}

function styleAltInput(input: HTMLInputElement, instance: Instance) {
	const alt = instance.altInput;
	if (!alt) return;

	const isHero = input.dataset.dateVariant === 'hero';

	alt.className = input.className;
	alt.placeholder = isHero ? '' : input.placeholder;
	alt.setAttribute('aria-label', input.getAttribute('aria-label') ?? input.name);

	if (input.id) {
		alt.id = input.id;
		input.removeAttribute('id');
	}

	if (isHero) {
		alt.classList.add('date-picker-alt--hero');
	}

	const field = input.closest('[data-date-picker-field]');

	const pushHook = (key: 'onOpen' | 'onClose', fn: () => void) => {
		const hook = instance.config[key];
		if (Array.isArray(hook)) hook.push(fn);
		else if (hook) instance.config[key] = [hook, fn];
		else instance.config[key] = [fn];
	};

	pushHook('onOpen', () => field?.classList.add('is-open'));
	pushHook('onClose', () => field?.classList.remove('is-open'));
}

function baseOptions(input: HTMLInputElement): Options {
	const minDate = input.dataset.dateMin === 'today' || !input.dataset.dateMin ? todayIso() : input.dataset.dateMin;

	return {
		altInput: true,
		altFormat: 'd/m/Y',
		dateFormat: 'Y-m-d',
		minDate,
		disableMobile: false,
		allowInput: false,
		clickOpens: true,
		position: 'auto',
		appendTo: document.body,
		monthSelectorType: 'static',
		locale: { firstDayOfWeek: 1 },
		onReady: (_selectedDates, _dateStr, instance) => {
			styleAltInput(input, instance);
		},
	};
}

function linkEndDateToStart(startInput: HTMLInputElement, endInput: HTMLInputElement) {
	const startPicker = pickerByInput.get(startInput);
	const endPicker = pickerByInput.get(endInput);
	if (!startPicker || !endPicker) return;

	const syncEndMin = (dateStr: string) => {
		endPicker.set('minDate', dateStr || todayIso());
		const endSelected = endPicker.selectedDates[0];
		const startSelected = startPicker.selectedDates[0];
		if (endSelected && startSelected && endSelected < startSelected) {
			endPicker.clear();
		}
	};

	const onStartChange = (_selected: Date[], dateStr: string) => {
		syncEndMin(dateStr);
	};

	const existing = startPicker.config.onChange;
	if (Array.isArray(existing)) {
		existing.push(onStartChange);
	} else if (existing) {
		startPicker.config.onChange = [existing, onStartChange];
	} else {
		startPicker.config.onChange = [onStartChange];
	}

	syncEndMin(startPicker.input.value || todayIso());
}

export function initDatePickers(root: ParentNode = document) {
	const inputs = root.querySelectorAll<HTMLInputElement>('input[data-date-picker]');

	inputs.forEach((input) => {
		if (input.dataset.fpInit === 'true') return;
		input.dataset.fpInit = 'true';

		const instance = flatpickr(input, baseOptions(input));
		pickerByInput.set(input, instance);
	});

	root.querySelectorAll<HTMLInputElement>('input[data-date-links-to]').forEach((startInput) => {
		const endName = startInput.dataset.dateLinksTo;
		if (!endName || !startInput.form) return;

		const endInput = startInput.form.querySelector<HTMLInputElement>(
			`input[data-date-picker][name="${endName}"]`,
		);
		if (endInput) linkEndDateToStart(startInput, endInput);
	});
}

export function registerDatePickerLoader() {
	const run = () => initDatePickers(document);

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', run, { once: true });
	} else {
		run();
	}

	document.addEventListener('astro:page-load', run);
}
