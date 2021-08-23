import { Form, Formik } from "formik";
import { ContainerApp } from "../../components/ContainerApp";
import { Titulo } from "../../components/Titulo";
import * as Yup from "yup";
import { MensagemErroCampoVazio } from "../../utils/utils";
import { CampoFormulario } from "../../components/Campo";
import { MensagemErro } from "../../components/Mensagem";
import { Button, Col, Row } from "reactstrap";
import { useState } from "react";

interface FormValuesCampoData {
  data: string;
}

const initialValuesCampoData: FormValuesCampoData = {
  data: ''
};

const validationSchema = Yup.object().shape({
  data: Yup.date().required(MensagemErroCampoVazio('data')),
});

export function TesteCampoData() {
  const [dataTexto, setDataTexto] = useState<FormValuesCampoData>(initialValuesCampoData);

  function handleSubmitForm(value: FormValuesCampoData) {
    setDataTexto({
      data: value.data,
    });
  }
  
  function formataData(data: Date): String {
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let dataFormatada = `${ano}-${mes}-${dia}`;
    return dataFormatada;
  }

  return (
    <ContainerApp>
      <Row>
        <Col md={12} style={{ textAlign: 'center' }}>
          <Titulo titulo={'TesteCampoData'}/>
        </Col>
        <Col md={12} style={{ margin: 50, padding: 10,}} >
          <p style={{ margin: 0, textAlign: 'center' }}>
            {`Data não formatada: ${dataTexto.data}`}
          </p>
        </Col>
        <Col md={12} style={{ margin: 50, padding: 10,}} >
          <p style={{ margin: 0, textAlign: 'center' }}>
            {`Data formatada: ${formataData(new Date(dataTexto.data))}`}
          </p>
        </Col>
        <Col md={12}>
          <Formik
            initialValues={initialValuesCampoData}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}
          >
            {({ errors, touched, values }) => (
              <Form>
                <Row>
                  <Col md={12}>
                    <CampoFormulario
                      type="date"
                      name="data"
                      id="data"
                      htmlFor="data"
                      label="Data"
                      placeholder="Digite a data"
                      className="form-control"
                      value={values.data}
                      erro={(errors.data && touched.data) && (
                        <MensagemErro
                          color='danger'
                          mensagem={errors.data}
                        />
                      )}
                    />
                  </Col>
                  <Col md={12} style={{ marginTop: 50 }}>
                    <Button
                      color="primary"
                      type="submit"
                      style={{ marginRight: 10 }}
                    >
                      Salvar
                    </Button>
                    <Button
                      color="danger"
                      type="reset"
                    >
                      Limpar
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </ContainerApp>
  );
}