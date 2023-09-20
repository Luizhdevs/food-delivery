import { useParams } from "react-router-dom";
import { Head } from "../../../components/Head";

import { Container, Inner, SubTitle, Title } from "./styled";

export default function OrderSuccesPage() {
  const { orderId } = useParams()
  
  return (
    <Container>
      <Head title='Compra Realizada com sucesso!' />
      <Inner>
        <Title>Compra Realizada com Sucesso</Title>

        <p>Número do Pedido <code>#{orderId}</code></p>

        <SubTitle>Dados de Contato da Loja</SubTitle>

        <ul>
          <li>Endereço:</li>
          <li>Tel:</li>
        </ul>

        <br />
        <a href="/">Voltar para a página inicial</a>
      </Inner>
    </Container>
  )
}