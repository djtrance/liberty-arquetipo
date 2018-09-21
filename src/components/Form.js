// Form.js
import styled from 'styled-components';
const Form = styled.form`
  width: 50%;
  margin: auto;
  background-color: #f2f2f2;
  padding: 30px;

.row {
    width: 100%;
    overflow: hidden;
}

.col {
    float: left;
    margin-top: 10px;
}

.inner-col {
    float: left;
}

.col-10 {
    width: 10%;
}

.col-15 {
    width: 15%;
}

.col-25 {
    width: 25%;
}

.col-50 {
    width: 50%;
}

.col-75 {
    width: 75%;
}

.col-85 {
    width: 85%;
}

.col-75-mid {
    width: 75%;
    text-align: center;
}

.col-90 {
    width: 90%;
}

.col-100 {
    width: 100%;
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
    padding: 10px;
    border: 1px solid #ccc;
    resize: vertical;
}
.tituloForm{
    text-align:center
}

.selectable-item {
    padding: 5px;
    cursor: pointer;
}

.selectable-item:hover {
    background-color: #2ba0cc;
}

.caja-seleccion {
    background-color: #FFFFFF;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: small;
    height: 150px;
}
`;
export default Form;