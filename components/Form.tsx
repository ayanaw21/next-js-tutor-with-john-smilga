import React from "react";

const createUser = async()=>{
    'use server'
    console.log('creating user...');
    
}

const Form = () => {
	return (
		<form action={createUser} className={formStyle}>
			<h2 className="text-2xl capitalize mb-4">create user</h2>
			<input
				className={inputStyle}
				type="text"
				name="firstName"
				defaultValue="peter"
				required
			/>
			<input
				className={inputStyle}
				type="text"
				name="lastName"
				defaultValue="smith"
				required
			/>
			<button className={btnStyle} type="submit">
				submit
			</button>
		</form>
	);
};

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
	"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

export default Form;
