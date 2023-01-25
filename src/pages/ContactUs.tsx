import React from 'react';

interface IFormInputValues {
	email: string;
	message: string;
	fullName: string;
	telephone: string;
	typeOfBusiness: string
}

const ContactUs = () => {
	const [values, setValues] = React.useState<IFormInputValues>({ email: '', message: '', fullName: '', telephone: '', typeOfBusiness: ''});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValues((previousValues) => ({
			...previousValues,
			[event.target.name]: event.target.value,
		}));
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(values);
	}

	// React.useEffect(() => {
	// 	localStorage.setItem('form', JSON.stringify(values));
	// }, [values]);

	return (
		<main>
			<header>
				<h1>Caching Form Inputs In React</h1>
				<h3>Building offline forms using local storage in react</h3>
			</header>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">
					full name
					<input
						autoComplete="off"
						type="text"
						name="fullName"
						id="fullName"
						placeholder="Mr. Anyisob Baidoo"
						onChange={handleChange}
						value={values.fullName}
					/>
					<small>An identifiable name which we can use to contact you.</small>
				</label>
				<label htmlFor="email">
					Email
					<input
						placeholder="e.g. user.email@domain.com"
						type="email"
						name="email"
						id="email"
						onChange={handleChange}
						value={values.email}
					/>
				</label>
				<label htmlFor="telephone">
					Telephone
					<input
						type="text"
						placeholder="e.g. +233(0)-392-498-2882"
						name="telephone"
						id="telephone"
						onChange={handleChange}
						value={values.telephone}
					/>
				</label>
				<label htmlFor="telephone">
					Type Of Business
					<input
						type="text"
						placeholder="e.g. +233(0)-392-498-2882"
						name="typeOfBusiness"
						id="typeOfBusiness"
						onChange={handleChange}
						value={values.typeOfBusiness}
					/>
				</label>
				<label htmlFor="message">
					Message
					<textarea
						name="message"
						id="message"
						value={values.message}
						onChange={handleChange}
					></textarea>
					<small>Your contact message for us</small>
				</label>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
}

export default ContactUs;
