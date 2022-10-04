import React from "react";
import { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";

const Form = () => {
	const [text, setText] = useState(null);

	return (
		<Paper elevation={1} style={{ padding: "1em" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "center"
				}}
			>
				<TextField
					id="outlined-basic"
					label="Tarefa"
					variant="outlined"
					fullWidth
					onChange={(e) => setText(e.target.value)}
				/>
				<Button variant="text" onClick={() => console.log(text)}>
					ADD
				</Button>
			</div>
		</Paper>
	);
};

export default Form;
