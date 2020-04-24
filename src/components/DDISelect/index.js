import React from 'react';
import { SignupSelect } from './styles';
import { LoginInput } from '../../pages/FirstSignup/styles';

export default function DDISelect({ value, setDDI }) {
  return (
    <div style={{ position: 'relative', width: '7em', marginRight: '1em' }}>
      <LoginInput value={value}></LoginInput>
      <SignupSelect
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          opacity: 0,
        }}
        type='select'
        name='ddi'
        value={value}
        onChange={(e) => {
          debugger;
          setDDI(e.target.value);
        }}
      >
        <option value='93'>Afeganistao</option>
        <option value='+27'>AFRICA DO SUL</option>
        <option value='+1'>ALASCA</option>
        <option value='+355'>ALBANIA</option>
        <option value='+49'>ALEMANHA</option>
        <option value='+376'>ANDORRA</option>
        <option value='+244'>ANGOLA</option>
        <option value='+1'>ANGUILLA</option>
        <option value='+599'>ANT.HOLANDESAS</option>
        <option value='+1'>ANTIGUA</option>
        <option value='+966'>ARABIAAUDITA</option>
        <option value='+213'>ARGELIA</option>
        <option value='+54'>ARGENTINA</option>
        <option value='+374'>ARMENIA</option>
        <option value='+297'>ARUBA</option>
        <option value='+247'>ASCENSAO ILHAS</option>
        <option value='+61'>AUSTRALIA</option>
        <option value='+43'>AUSTRIA</option>
        <option value='+994'>AZERBAIJAO</option>
        <option value='+1'>BAHAMAS</option>
        <option value='+880'>BANGLADESH</option>
        <option value='+1'>BARBADOS</option>
        <option value='+973'>BAREIN</option>
        <option value='+375'>BELARUS</option>
        <option value='+32'>BELGICA</option>
        <option value='+501'>BELIZE</option>
        <option value='+229'>BENIN</option>
        <option value='+1'>BERMUDAS</option>
        <option value='+591'>BOLIVIA</option>
        <option value='+387'>BOSNIA E HERZEGOVINA</option>
        <option value='+267'>BOTSUANA</option>
        <option value='+55'>BRASIL</option>
        <option value='+673'>BRUNEI</option>
        <option value='+359'>BULGARIA</option>
        <option value='+226'>BURKINA FASO</option>
        <option value='+257'>BURUNDI</option>
        <option value='+975'>BUTAO</option>
        <option value='+238'>CABO VERDE</option>
        <option value='+237'>CAMAROES</option>
        <option value='+855'>CAMPUCHEA</option>
        <option value='+1'>CANADA</option>
        <option value='+7'>CASAQUISTAO</option>
        <option value='+974'>CATAR</option>
        <option value='+1'>CAYMAN ILHAS</option>
        <option value='+235'>CHADE</option>
        <option value='+56'>CHILE</option>
        <option value='+86'>CHINA</option>
        <option value='+357'>CHIPRE</option>
        <option value='+65'>CINGAPURA</option>
        <option value='+57'>COLOMBIA</option>
        <option value='+269'>COMORES</option>
        <option value='+242'>CONGO</option>
        <option value='+682'>COOK ILHAS</option>
        <option value='+850'>COREIA DOORTE</option>
        <option value='+82'>COREIA DOUL</option>
        <option value='+225'>COSTA DO MARFIM</option>
        <option value='+506'>COSTA RICA</option>
        <option value='+385'>CROACIA</option>
        <option value='+53'>CUBA</option>
        <option value='+246'>DIEGO GARCIA</option>
        <option value='+45'>DINAMARCA</option>
        <option value='+253'>DJIBUTI</option>
        <option value='+1'>DOMINICA</option>
        <option value='+1'>DOMINICANA REP</option>
        <option value='+20'>EGITO</option>
        <option value='+503'>ELALVADOR</option>
        <option value='+971'>EMIRADOS A. UNIDOS</option>
        <option value='+593'>EQUADOR</option>
        <option value='+291'>ERITREA</option>
        <option value='+386'>ESLOVENIA</option>
        <option value='+34'>ESPANHA</option>
        <option value='+1'>ESTADOS UNIDOS</option>
        <option value='+372'>ESTONIA</option>
        <option value='+251'>ETIOPIA</option>
        <option value='+298'>FAROE ILHAS</option>
        <option value='+679'>FIJI</option>
        <option value='+63'>FILIPINAS</option>
        <option value='+358'>FINLANDIA</option>
        <option value='+886'>FORMOSA</option>
        <option value='+33'>FRANCA</option>
        <option value='+241'>GABAO</option>
        <option value='+220'>GAMBIA</option>
        <option value='+233'>GANA</option>
        <option value='+995'>GEORGIA</option>
        <option value='+350'>GIBRALTAR</option>
        <option value='+1'>GRANADA</option>
        <option value='+30'>GRECIA</option>
        <option value='+299'>GROENLANDIA</option>
        <option value='+590'>GUADALUPE</option>
        <option value='+1'>GUAM</option>
        <option value='+502'>GUATEMALA</option>
        <option value='+592'>GUIANA</option>
        <option value='+594'>GUIANA FRANCESA</option>
        <option value='+224'>GUINE</option>
        <option value='+240'>GUINE EQUATORIAL</option>
        <option value='+245'>GUINE-BISSAU</option>
        <option value='+509'>HAITI</option>
        <option value='+1'>HAVAI</option>
        <option value='+31'>HOLANDA</option>
        <option value='+504'>HONDURAS</option>
        <option value='+852'>HONG KONG</option>
        <option value='+36'>HUNGRIA</option>
        <option value='+967'>IEMEN REP.</option>
        <option value='+91'>INDIA</option>
        <option value='+62'>INDONESIA</option>
        <option value='+98'>IRA</option>
        <option value='+964'>IRAQUE</option>
        <option value='+353'>IRLANDA</option>
        <option value='+354'>ISLANDIA</option>
        <option value='+972'>ISRAEL</option>
        <option value='+39'>ITALIA</option>
        <option value='+1'>JAMAICA</option>
        <option value='+81'>JAPAO</option>
        <option value='+962'>JORDANIA</option>
        <option value='+686'>KIRIBATI</option>
        <option value='+965'>KUWEIT</option>
        <option value='+856'>LAOS</option>
        <option value='+266'>LESOTO</option>
        <option value='+371'>LETONIA</option>
        <option value='+961'>LIBANO</option>
        <option value='+231'>LIBERIA</option>
        <option value='+218'>LIBIA</option>
        <option value='+423'>LIECHTENSTEIN</option>
        <option value='+370'>LITUANIA</option>
        <option value='+352'>LUXEMBURGO</option>
        <option value='+853'>MACAU</option>
        <option value='+389'>MACEDONIA</option>
        <option value='+261'>MADAGASCAR</option>
        <option value='+60'>MALASIA</option>
        <option value='+265'>MALAVI</option>
        <option value='+960'>MALDIVAS</option>
        <option value='+223'>MALI</option>
        <option value='+356'>MALTA</option>
        <option value='+500'>MALVINAS ILHAS</option>
        <option value='+1'>MARIANASORTE ISL.</option>
        <option value='+212'>MARROCOS</option>
        <option value='+692'>MARSHALL ILHAS</option>
        <option value='+596'>MARTINICA</option>
        <option value='+230'>MAURICIO</option>
        <option value='+222'>MAURITANIA</option>
        <option value='+269'>MAYOTTE(ILHAS)</option>
        <option value='+52'>MEXICO</option>
        <option value='+691'>MICRONESIA</option>
        <option value='+838'>MIDWAY ILHAS</option>
        <option value='+258'>MOCAMBIQUE</option>
        <option value='+373'>MOLDOVA</option>
        <option value='+976'>MONGOLIA</option>
        <option value='+382'>MONTENEGRO</option>
        <option value='+1'>MONTSERRAT</option>
        <option value='+264'>NAMIBIA</option>
        <option value='+674'>NAURU</option>
        <option value='+977'>NEPAL</option>
        <option value='+505'>NICARAGUA</option>
        <option value='+227'>NIGER</option>
        <option value='+234'>NIGERIA</option>
        <option value='+683'>NIUE</option>
        <option value='+672'>NORFOLK ILHA</option>
        <option value='+47'>NORUEGA</option>
        <option value='+687'>NOVA CALEDONIA</option>
        <option value='+64'>NOVA ZELANDIA</option>
        <option value='+968'>OMA</option>
        <option value='+680'>PALAU</option>
        <option value='+970'>PALESTINA</option>
        <option value='+507'>PANAMA</option>
        <option value='+675'>PAPUAOVA GUINE</option>
        <option value='+92'>PAQUISTAO</option>
        <option value='+595'>PARAGUAI</option>
        <option value='+51'>PERU</option>
        <option value='+48'>POLONIA</option>
        <option value='+1'>PORTO RICO</option>
        <option value='+351'>PORTUGAL</option>
        <option value='+377'>PRINCIPADO MONACO</option>
        <option value='+254'>QUENIA</option>
        <option value='+996'>QUIRGUIZIA</option>
        <option value='+44'>REINO UNIDO</option>
        <option value='+236'>REP.CENTRO AFRICANA</option>
        <option value='+421'>REP.ESLOVAQUIA</option>
        <option value='+420'>REP.TCHECA</option>
        <option value='+262'>REUNIAO ILHAS</option>
        <option value='+854'>RODRIGUES ILHAS</option>
        <option value='+40'>ROMENIA</option>
        <option value='+250'>RUANDA</option>
        <option value='+7'>RUSSIA</option>
        <option value='+1'>S.KITTS &NEVIS</option>
        <option value='+1'>S.VICENTE ILHAS</option>
        <option value='+833'>SAARA ESPANHOL</option>
        <option value='+677'>SALOMAO ILHAS</option>
        <option value='+685'>SAMOA</option>
        <option value='+684'>SAMOA AMERICANA</option>
        <option value='+1'>SANTA LUCIA</option>
        <option value='+378'>SAO MARINO</option>
        <option value='+239'>SAO TOME E PRINCIPE</option>
        <option value='+221'>SENEGAL</option>
        <option value='+232'>SERRA LEOA</option>
        <option value='+381'>SÃƒï¿½RVIA</option>
        <option value='+248'>SEYCHELLES</option>
        <option value='+963'>SIRIA</option>
        <option value='+252'>SOMALIA</option>
        <option value='+94'>SRI-LANKA</option>
        <option value='+508'>ST.PIERRE E MIQUELON</option>
        <option value='+290'>STA HELENA ILHAS</option>
        <option value='+268'>SUAZILANDIA</option>
        <option value='+249'>SUDAO</option>
        <option value='+46'>SUECIA</option>
        <option value='+41'>SUICA</option>
        <option value='+597'>SURINAME</option>
        <option value='+992'>TADJIQUISTAO</option>
        <option value='+66'>TAILANDIA</option>
        <option value='+689'>TAITI</option>
        <option value='+255'>TANZANIA</option>
        <option value='+672'>TERRIT.EXT.AUSTRALIA</option>
        <option value='+670'>TIMOR LESTE</option>
        <option value='+228'>TOGO</option>
        <option value='+676'>TONGA</option>
        <option value='+690'>TOQUELAU</option>
        <option value='+1'>TRINIDAD E TOBAGO</option>
        <option value='+216'>TUNISIA</option>
        <option value='+993'>TURCOMENIA</option>
        <option value='+1'>TURKS E CAICOS ILHAS</option>
        <option value='+90'>TURQUIA</option>
        <option value='+688'>TUVALU</option>
        <option value='+380'>UCRANIA</option>
        <option value='+256'>UGANDA</option>
        <option value='+95'>UNIAO DE MYANMAR</option>
        <option value='+598'>URUGUAI</option>
        <option value='+998'>UZBEQUISTAO</option>
        <option value='+678'>VANUATU</option>
        <option value='+58'>VENEZUELA</option>
        <option value='+84'>VIETNA</option>
        <option value='+1'>VIRGENS A. ILHAS</option>
        <option value='+1'>VIRGENS B.ILHAS</option>
        <option value='+839'>WAKE ILHAS</option>
        <option value='+681'>WALLIS E FUTUNA</option>
        <option value='+243'>ZAIRE</option>
        <option value='+260'>ZAMBIA</option>
        <option value='+259'>ZANZIBAR</option>
        <option value='+263'>ZIMBABUE</option>
      </SignupSelect>
    </div>
  );
}
