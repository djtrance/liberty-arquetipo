// Form.js
import styled from 'styled-components';
const Form = styled.form`
  width: 400px;
  border: 2px solid #CFE6FF;
  margin: auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  
.col-10 {
    float: left;
    width: 10%;
    margin-top: 6px;
}

.col-15 {
    float: left;
    width: 15%;
    margin-top: 6px;
}

.col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
}

.col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
}
.col-75-mid {
    float: left;
    width: 75%;
    margin-top: 6px;
    text-align: center;
}

.col-90 {
    float: left;
    width: 90%;
    margin-top: 6px;
}

@media screen and (max-width: 600px) {
    .col-25, .col-75, input[type=submit] {
        width: 100%;
        margin-top: 0;
    }
}
.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
}

input[type=submit]:hover {
    background-color: #45a049;
}
input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
.tituloForm{
    text-align:center
}
`;
export default Form;