import { Field } from "formik";
import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Row, Col, Label } from "reactstrap";
import { InputType } from "reactstrap/es/Input";
import styled from "styled-components";

interface CampoProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  htmlFor?: string;
  label?: string;
  className?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  value?: any;
  erro?: any;
}

const CampoFormularioEstilizado = styled(Row)`
  display: flex;
  flex-direction: column;
`;

export function CampoFormulario(props: CampoProps) {
  return (
    <CampoFormularioEstilizado>
      <Col md={12}>
        <Label htmlFor={props.htmlFor}>{props.label}</Label>
      </Col>
      <Col md={12}>
        <Field
          className={props.className}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          type={props.type}
          {...props}
        />
      </Col>
      {props.erro}
    </CampoFormularioEstilizado>
  );
}

interface CampoSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  value?: any;
  htmlFor?: string;
  label?: string;
  erro?: any;
  lista: any[];
}

export function CampoSelectFormulario(props: CampoSelectProps) {
  return (
    <CampoFormularioEstilizado>
      <Col md={12}>
        <Label htmlFor={props.htmlFor}>{props.label}</Label>
      </Col>
      <Col md={12}>
        <Field
          className={props.className}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          as="select"
          {...props}
        >
          <option value="">Selecione</option>
          {props.lista.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </Field>
      </Col>
      {props.erro}
    </CampoFormularioEstilizado>
  );
}

interface CampoTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  value?: any;
  htmlFor?: string;
  label?: string;
  erro?: any;
}

export function CampoTextAreaFormulario(props: CampoTextAreaProps) {
  return (
    <CampoFormularioEstilizado>
      <Col md={12}>
        <Label htmlFor={props.htmlFor}>{props.label}</Label>
      </Col>
      <Col md={12}>
        <Field
          className={props.className}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          as="textarea"
          {...props}
        />
      </Col>
      {props.erro}
    </CampoFormularioEstilizado>
  );
}

export const Separador = styled.hr`
  width: 100%;
  border-top: 1px solid rgba(0,0,0,.2);
`;