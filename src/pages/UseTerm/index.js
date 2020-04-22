import React from 'react';
import { Welcome, Container, RegisterButton } from '../FirstSignup/styles';
import { MainBody, Header, AcceptButton } from './style';

export default function UseTerm() {
  return (
    <div>
      <Header
        style={{
          backgroundColor: 'var(--color-blue)',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <div style={{ fontSize: '3.5em', textAlign: 'center' }}>
          <strong>Termos e condições de uso</strong>
        </div>
      </Header>
      <MainBody>
        <p>
          Ao acessar a plataforma, o usuário concorda e reconhece que analisou e
          aceitou as condições de uso. Leia-as atentamente, pois o uso deste
          site/aplicativo significa que você aceitou todos os termos e concorda
          em cumpri-los. Se o usuário for menor de idade ou declarado incapaz em
          quaisquer aspectos, precisará da permissão de seus pais ou responsável
          que também deverão concordar com estes termos e condições.
        </p>
        <strong>Alterações, modificações e rescisão</strong>
        <p>
          Os idealizadores reservam-se no direito de, a qualquer tempo,
          modificar estes termos sejaincluindo, removendo ou alterando quaisquer
          de suas cláusulas. Tais modificações terão efeito imediato. Após
          publicadas, tais alterações, ao continuar com o uso do aplicativo, o
          usuário terá aceitado e concordado em cumprir os termos modificados.
          Os idealizadores podem, de tempos em tempos, modificar ou descontinuar
          (temporária ou permanentemente) a distribuição ou a atualização deste
          aplicativo.
        </p>
        <strong>Cadastro</strong>
        <p>
          Para que o usuário acesse os conteúdos e serviços disponibilizados, é
          necessário realizar cadastro, mediante a criação de um perfil com
          login e senha e/ou fornecimento de todos ou alguns dados pessoais de
          cadastro, tais como: nome completo, endereço, e-mail, CPF, denominados
          “Dados de Cadastro”. Outros dados de cadastro para identificação do
          usuário poderão ser solicitados, caso sejam necessários.
        </p>
        <p>
          O usuário se responsabiliza pela precisão e veracidade dos dados
          informados e reconhece que a inconsistência destes poderá implicar a
          impossibilidade de acessar o site e utilizar total ou parcialmente.
        </p>
        <p>
          O usuário assume inteira responsabilidade pela guarda, sigilo e boa
          utilização do login e senha cadastrados, isentando os idealizadores do
          aplicativo de qualquer responsabilidade. O login e senha só poderão
          ser utilizados pelo usuário cadastrado, considerando-os pessoais e
          intransferíveis, sendo expressamente proibido o seu compartilhamento a
          terceiros.
        </p>
        <p>
          O usuário poderá, a qualquer momento, excluir sua conta no
          site/aplicativo, ficando ressalvada a guarda pelos idealizadores, das
          informações e/ou dados cuja manutenção seja a eles imposta em razão de
          obrigações legais e/ou regulatórias ou, ainda, cuja a manutenção seja
          necessária para cumprimento de ordem judicial, no âmbito de processos
          judiciais e/ou administrativos e questionamento de terceiros
          decorrentes das atividades desempenhadas pelo usuário no
          site/aplicativo.
        </p>
        <strong>Consentimento para coleta e uso de dados</strong>
        <p>
          O usuário concorda que a plataforma “Fica Em Casa” pode coletar e usar
          dados técnicos de seu dispositivo utilizado para o acesso, tais como
          especificações, configurações, versões de sistema operacional, tipo de
          conexão à internet e afins.
        </p>
        <strong>Isenção de garantias e limitações de responsabilidade</strong>
        <p>
          Este site/aplicativo estará em contínuo desenvolvimento, podendo
          conter erros e, portanto, o uso é fornecido “no estado em que se
          encontra” sob risco do usuário final. Na extensão máxima permitida
          pela legislação aplicável, a “Fica em casa”, seus idealizadores e
          colaboradores isentam-se de quaisquer garantias e condições expressas
          ou implícitas incluindo, sem limitação, garantias de comercialização,
          adequação a um propósito específico, titularidade e não violação no
          que diz respeito ao aplicativo e qualquer um de seus componentes ou
          ainda à prestação ou não de serviços de suporte.
        </p>
        <p>
          A plataforma “Fica Em Casa” não garante, declara ou assegura que o uso
          deste aplicativo será ininterrupto ou livre de erros, sendo assim, o
          usuário concorda que os idealizadores poderão remover por períodos
          indefinidos ou cancelar este site/aplicativo a qualquer momento sem
          que haja avisos.
        </p>
        <p>
          A plataforma “Fica Em Casa” não garante, declara, nem assegura que
          este aplicativo esteja livre de perda, interrupção, ataque, vírus,
          interferência, pirataria ou outra invasão de segurança. Sendo assim,
          isenta-se de qualquer responsabilidade em relação às questões
          anteriormente citadas.
        </p>
        <p>
          Em hipótese alguma a plataforma “Fica Em Casa”, bem como seus
          idealizadores e colaboradores responsabilizar-se-ão:
        </p>
        <p>
          - Pelo pagamento de perdas ou danos, inclusive danos diretos,
          indiretos, específicos, acidentais ou emergentes, decorrentes do mau
          uso, impossibilidade de acesso ou uso deste site/aplicativo ou de
          alguma de suas funções, inclusive com o fim de consultar ou baixar
          informações, dados, textos, imagens ou outros materiais acessíveis por
          meio desta plataforma;
        </p>
        <p>
          - Por qualquer ato ou omissão realizado e/ou dano causado pelo usuário
          nesta plataforma;
        </p>
        <p>
          - Pelo uso indevido de qualquer usuário ou terceiros do
          site/aplicativo, no todo ou em parte, por qualquer meio ou forma,
          incluindo, mas não se limitando à reprodução ou divulgação em
          quaisquer meios.
        </p>
        <strong style={{ fontSize: '4em', marginBottom: '1em' }}>
          Política de Privacidade
        </strong>
        <strong>Conteúdo enviado pelos usuários</strong>
        <p>
          O usuário declara estar ciente e expressamente concorda que as
          informações de identificação do seu perfil, bem como qualquer conteúdo
          por ele transmitido entre sites e aplicativos poderão ser acessados e
          visualizados por quaisquer outros usuários, observadas as normas que
          dispõem acerca do sigilo bancário e marco civil, sem que os
          idealizadores do serviço tenham qualquer responsabilidade sobre tal
          conteúdo.
        </p>
        <strong>Informações dos usuários</strong>
        <p>Existem duas formas de coleta de informações dos usuários;</p>
        <p>
          Por meio de cadastro realizado pelo próprio usuário da plataforma{' '}
        </p>
        <p>
          - Por meio do uso de cookies ou outra tecnologia que permita armazenar
          informações a respeito da navegação do usuário da plataforma.
        </p>
        <p>
          As informações dos usuários são coletadas, armazenadas, tratadas,
          processadas e utilizadas pela plataforma com as seguintes finalidades:
        </p>
        <p>
          - Desenvolver, manter e aperfeiçoar os recursos e funcionalidades do
          site/aplicativo;
        </p>
        <p>
          - Possibilitar o acesso e o uso dos recursos e funcionalidades do
          site/aplicativo pelos usuários;
        </p>
        <p>
          - Analisar o desempenho do site/aplicativo, medir a audiência,
          verificar hábitos de navegação dos usuários da plataforma, a forma
          pela qual chegaram na página, avaliar estatísticas relacionadas ao
          número de acessos e uso da plataforma;
        </p>
        <p>
          Análises relacionadas à gestão da informação e/ou segurança do
          site/aplicativo, aperfeiçoamento e desenvolvimento de ferramentas
          antifraude;
        </p>
        <p>- Melhorar as experiências de navegação dos usuários;</p>
        <p>
          - Permitir a comunicação entre usuários e idealizadores, inclusive
          mediante o envio e recebimento de e-mails e outros meios de
          comunicação;
        </p>
        <p>
          Os idealizadores preservam a privacidade dos usuários e não
          compartilham seus dados e informações com terceiros, salvo mediante
          consentimento do próprio usuário, por força de lei ou ordem judicial.
        </p>
        <strong>Responsabilidades</strong>
        <p>
          O usuário não poderá praticar as seguintes ações com relação ao
          site/aplicativo, no todo ou em parte, sem prejuízo de outras que sejam
          consideradas ilegais, contrariem a ordem pública ou atentem a moral e
          os bons costumes:
        </p>
        <p>
          - Utilizar o site/aplicativo ou qualquer conteúdo dele constante, no
          todo ou em parte, sob qualquer forma, com o propósito diverso daquele
          a que este se destina e de forma diversa da prevista neste documento,
          inclusive divulgando, a qualquer título, a terceiros que não tenham ou
          não devam ter acesso à plataforma.
        </p>
        <p>
          - Apagar, deturpar, corromper, alterar, editar, adaptar, transmitir ou
          de qualquer forma modificar, sob qualquer meio ou forma, no todo ou em
          parte, o site/aplicativo, e/ou qualquer conteúdo nele constante ou
          dele resultante;
        </p>
        <p>
          - Carregar, enviar e/ou transmitir qualquer conteúdo de cunho erótico,
          pornográfico, obsceno, difamatório ou calunioso;
        </p>
        <p>
          - Carregar, enviar e/ou transmitir qualquer conteúdo que promova ou
          incite o preconceito (inclusive de origem, raça, sexo, cor, identidade
          de gênero, orientação sexual e idade) ou qualquer forma de
          discriminação;
        </p>
        <p>
          - Ameaçar, coagir ou causar constrangimento físico ou moral aos demais
          usuários da plataforma;
        </p>
        <p>
          - Realizar atos que causem ou propiciem a contaminação ou prejudiquem
          quaisquer equipamentos da organização e/ou de terceiros, inclusive por
          meio de vírus, trojans, malware, worm, bot, backdoor, spyware, rootkit
          ou por quaisquer outros dispositivos que venham a ser criados;
        </p>
        <p>
          - Praticar quaisquer atos em relação ao site/aplicativo, direta ou
          indiretamente, no todo ou em parte, que possam causar prejuízo à
          organização, aos usuários e a terceiros.
        </p>
        <strong>Propriedade Intelectual</strong>
        <p>
          Pertencem aos idealizadores e colaboradores todos e quaisquer direitos
          intelectuais sobre o site/aplicativo, incluindo, mas não se limitando
          a:
        </p>
        <p>
          - Todo e qualquer software, aplicativo ou funcionalidade empregado
          pelos idealizadores para desenvolver, manter e melhorar o
          funcionamento da plataforma;
        </p>
        <p>- Identidade visual do site/aplicativo; e</p>
        <p>
          - Todo e qualquer conteúdo criado e produzido exclusivamente pelos
          idealizadores.
        </p>
      </MainBody>
      <AcceptButton>Aceitar</AcceptButton>
    </div>
  );
}
