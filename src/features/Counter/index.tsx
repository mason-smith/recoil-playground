import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

// @material-ui dependencies
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

import classes from "./Counter.module.css";
import { textState } from "./atoms";
import { CharacterCount } from "./components/CharacterCount";

export const CharacterCounter = () => {
  const [text, setText] = useRecoilState(textState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="text"
          label="Add some text"
          name="text"
          autoComplete="text"
          autoFocus
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <CharacterCount />
      </div>
    </Container>
  );
};
