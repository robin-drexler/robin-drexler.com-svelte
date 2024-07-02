export function sanitizeId(input: string): string {
	let sanitized = input
		.toLowerCase()
		.replace(/[^a-z0-9_-]/g, '-') // Replace non-alphanumeric characters with a hyphen
		.replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens

	// Ensure the ID does not start with a digit
	if (/^[0-9]/.test(sanitized)) {
		sanitized = `id-${sanitized}`;
	}

	return sanitized;
}
