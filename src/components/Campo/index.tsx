import { Field } from "formik";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Row, Col, Label } from "reactstrap";
import { InputType } from "reactstrap/es/Input";
import styled from "styled-components";

interface CampoProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  htmlFor?: string;
  label?: string;
  renderMask?: any;
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
          type={props.type}
          render={props.renderMask}
          {...props}
        />
      </Col>
      {props.erro}
    </CampoFormularioEstilizado>
  );
}

export function CampoSelectFormulario(props: CampoProps) {
  return (
    <CampoFormularioEstilizado>
      <Col md={12}>
        <Label htmlFor={props.htmlFor}>{props.label}</Label>
      </Col>
      <Col md={12}>
        <Field
          type={props.type}
          render={props.renderMask}
          {...props}
        />
      </Col>
      {props.erro}
    </CampoFormularioEstilizado>
  );
}

interface CampoTextAreaFormularioProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  htmlFor?: string;
  label?: string;
  erro?: any;
}

export function CampoTextAreaFormulario(props: CampoTextAreaFormularioProps) {
  return (
    <CampoFormularioEstilizado>
      <Col md={12}>
        <Label htmlFor={props.htmlFor}>{props.label}</Label>
      </Col>
      <Col md={12}>
        <Field
          component="textarea"
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