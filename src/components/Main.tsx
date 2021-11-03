import React from 'react';
import '../assets/scss/main.scss';
import Button from "../containers/Button"
import { faAddressCard, faHome, faQuestion, faBriefcase, faBuilding } from '@fortawesome/free-solid-svg-icons';

interface iMainProps {
    content: string;
}

class Main extends React.Component<iMainProps> {
    public render() {
        return (
            <div className='main' id='mainPageContent'>
                <div className="row">
                    <div className="col">
                        <Button label={'Inicio'} icon={faHome} backgroundColor={'#006f93'} size={'medium'} context={'main'} />
                    </div>
                    <div className="col">
                        <Button label={'Conocenos'} icon={faQuestion} backgroundColor={'#006f93'} size={'medium'} context={'main'}/>
                    </div>
                    <div className="col">
                        <Button label={'Trabajadores'} icon={faBriefcase} backgroundColor={'#006f93'} size={'medium'} context={'main'}/>
                    </div>
                    <div className="col">
                        <Button label={'Pensionistas'} icon={faAddressCard} backgroundColor={'#006f93'} size={'medium'} context={'main'}/>
                    </div>
                    <div className="col">
                        <Button label={'Empresarios'} icon={faBuilding} backgroundColor={'#006f93'} size={'medium'} context={'main'}/>
                    </div>
                </div>
                <div className="row" id="marginRow">
                    <div className="col-2" />
                    <div className="col" id="mainContent">

                        {this.props.content != 'Inicio' ? null :
                            <div id="bottomPart">
                            <div role="tabpanel" id="elemento2-tab" className="col-5" aria-labelledby="elemento2-infoutilH3">
                                <h1 id="elemento2-infoutilH3">Información útil</h1>
                                <ul className=" disc" aria-label="Enlaces a Información útil">
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="#" title="">Aula de la Seguridad Social</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="#" title="">Calendario laboral</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="#" title="">Formularios / Modelos</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="#" title="">Internacional</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="#" title="">Mutuas colaboradoras con la seguridad social</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="#" title="">Oferta Publica de empleo</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="#" title="">Reutilización de información pública</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="#" title="">Subastas y concursos de bienes</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="#" title="">Trámites y gestiones</a>
                                    </li>
                                </ul>
                            </div>
                            <div role="tabpanel" id="elemento3-tab" className="col-5" aria-labelledby="elemento3-masvistasH3">
                            <h1 id="elemento3-masvistasH3">Lo más visitado</h1>
                            <ul className="disc ">	
                                                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <a title="Trámites y gestiones. Página más visitada en los últimos 15 días" href="#">
                                                        Trámites y gestiones
                                                    </a>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <a title="Consultas. Página más visitada en los últimos 15 días" href="#">
                                                        Consultas
                                                    </a>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <a title="Direcciones y teléfonos. Página más visitada en los últimos 15 días" href="#">
                                                        Direcciones y teléfonos
                                                    </a>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <a title="Acceso al Sistema RED. Página más visitada en los últimos 15 días" href="#">
                                                        Acceso al Sistema RED
                                                    </a>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <a title="Pensionistas. Página más visitada en los últimos 15 días" href="#">
                                                        Pensionistas
                                                    </a>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <a title="Accesos con Cl@ve a servicios de la Sede Electrónica. Página más visitada en los últimos 15 días" href="#">
                                                        Accesos con Cl@ve a servicios de la Sede Electrónica
                                                    </a>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <a title="Ingreso Mínimo Vital. Página más visitada en los últimos 15 días" href="#">
                                                        Ingreso Mínimo Vital
                                                    </a>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <a title="Tarjeta Sanitaria Europea (TSE). Página más visitada en los últimos 15 días" href="#">
                                                        Tarjeta Sanitaria Europea (TSE)
                                                    </a>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <a title="Sistema RED. Página más visitada en los últimos 15 días" href="#">
                                                        Sistema RED
                                                    </a>
                                                </li>
                                                <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <a title="Trabajadores. Página más visitada en los últimos 15 días" href="#">
                                                        Trabajadores
                                                    </a>
                                                </li>                     
                                        </ul>
                                    </div>
                                    </div>
                            
                        }

                        {/* - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - */}
                        {this.props.content != 'Conocenos' ? null :
                            <div>
                                <h1 className="col-md-12 mb15 h1 title">Conócenos</h1>
                                <div className="col-sm-12 col-xs-12 margen text-block">
                                    <ul className="col-md-12 listado-menu mt10 triangle bordeOut onlyone">
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Historia de la Seguridad Social</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">¿Quiénes somos?</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Cartas de Servicios</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Publicaciones</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Documentación General</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }

                        {this.props.content != 'Trabajadores' ? null :
                            <div>
                                <h1 className="col-md-12 mb15 h1 title">Trabajadores</h1>
                                <div className="col-xs-12 text-justify" id="contenido">
                                    <div className="mark_content">
                                        <p className="irdivjust">Esta página Web le ofrece información sobre <a href="#">cómo darse de alta</a>, qué es <a href="#">lo que debe aportar económicamente</a> y qué tipo de <a href="#">prestaciones</a> puede recibir según su situación laboral, tanto si es trabajador por cuenta propia como ajena.</p>
                                        <p className="irdivjust">También podrá conocer más sobre <a href="#">regímenes</a>, <a href="#">normativa</a>, <a href="#">convenios</a>, <span title="etcétera " className="irabbr"><abbr title="etcétera " lang="es">etc.</abbr></span>, y obtener <a href="#">formularios y modelos</a> para presentarlos en una <a href="#">Oficina de la Seguridad Social</a>.</p>
                                        <p className="irdivjust">Desde aquí puede acceder a la <a href="#" title="Enlace a otra web, no garantizamos la accesibilidad para personas con discapacidad. Enlace en una nueva ventana" target="_blank" lang="es">Sede Electrónica de la Seguridad Social</a>, donde tiene a su disposición una serie de servicios y podrá gestionar solicitudes, escritos y comunicaciones sin necesidad de desplazarse.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-xs-12 margen text-block">
                                    <ul className="col-md-12 listado-menu mt10 triangle bordeOut onlyone">
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Afiliación</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Cotización / Recaudación de Trabajadores</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Trabajadores del mar</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }

                        {this.props.content != 'Pensionistas' ? null :
                            <div>
                                <h1 className="col-md-12 mb15 h1 title">Pensionistas</h1>
                                <div className="col-xs-12 text-justify" id="contenido">
                                    <div className="mark_content">
                                        <p className="irdivjust">Esta página Web le ofrece información sobre las <a href="#">prestaciones económicas y sociales</a> a las que usted o sus familiares pueden tener derecho, como <a href="#">pensiones de jubilación</a>, <a href="#">viudedad, orfandad </a>y otros derechos.</p>
                                        <p className="irdivjust">Puede conocer las <a href="#">modalidades y características</a> de estas prestaciones, los requisitos de acceso, importe y duración de las mismas, <a href="#">dónde y cómo solicitarlas</a>, <a href="#">revalorización</a>, <a href="#">derechos</a>, <a href="#">obligaciones</a>, y todo aquello que pueda ser de su interés en su condición de pensionista. También puede obtener <a href="#">formularios y modelos</a> para presentar en una <a href="#">Oficina de la Seguridad Social</a>.</p>
                                        <p className="irdivjust">Desde aquí puede acceder a la <a href="#" title="Enlace a otra web, no garantizamos la accesibilidad para personas con discapacidad. Enlace en una nueva ventana" target="_blank" lang="es">Sede Electrónica de la Seguridad Social</a>, donde tiene a su disposición una serie de servicios y podrá gestionar solicitudes, escritos y comunicaciones sin necesidad de desplazarse.</p>
                                    </div>
                                </div>
                                <div id="estructura" className="col-xs-12 col-md-12 mt0 niv-content">
                                    <div className="col-sm-12 col-xs-12 margen text-block">
                                        <ul className="col-md-12 listado-menu mt10 triangle bordeOut onlyone">
                                            <li className="col-xs-12 col-md-6">
                                                <a href="#">Pensiones</a>
                                            </li>
                                            <li className="col-xs-12 col-md-6">
                                                <a href="#">Gestión / Pago</a>
                                            </li>
                                            <li className="col-xs-12 col-md-6">
                                                <a href="#">Revalorización</a>
                                            </li>
                                            <li className="col-xs-12 col-md-6">
                                                <a href="#">Derechos</a>
                                            </li>
                                            <li className="col-xs-12 col-md-6">
                                                <a href="#">Obligaciones</a>
                                            </li>
                                            <li className="col-xs-12 col-md-6">
                                                <a href="#">Servicios</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }

                        {this.props.content != 'Empresarios' ? null :
                            <div>
                                <h1 className="col-md-12 mb15 h1 title">Empresarios</h1>
                                <div className="col-xs-12 text-justify" id="contenido">
                                    <div className="mark_content">
                                        <p className="irdivjust" id="texto">Esta página Web le ofrece la información que necesita para la gestión de su empresa sobre <a href="#">inscripción, altas, bajas,</a> <a href="#">cotización/recaudación,</a> <a href="#">pagos a los acreedores</a> de la Seguridad Social, <span className="irnula">|</span><span title="etcétera " className="irabbr"><abbr title="etcétera " lang="es">etc.</abbr></span>, así como los <a href="#">formularios y modelos</a> que puede presentar en cualquier <a href="#">Oficina de la Seguridad Social</a>.</p>
                                        <p className="irdivjust" id="texto">Puede acceder al <a href="#">Sistema RED</a> (Remisión Electrónica de Datos), servicio por el que se realizan gestiones e intercambios de información y documentos relativos a cotización, afiliación y remisión de partes de alta y baja de la prestación económica de incapacidad temporal.</p>
                                        <p className="irdivjust" id="texto">Además la Seguridad Social pone a disposición de las empresas el <a href="#">servicio de comunicación relativa a las prestaciones</a> que perciben sus trabajadores.<br /></p>
                                        <p className="irdivjust" id="texto">Desde aquí puede acceder a la <a href="#" title="Enlace a otra web, no garantizamos la accesibilidad para personas con discapacidad. Enlace en una nueva ventana" target="_blank" lang="es">Sede Electrónica de la Seguridad Social</a>, donde tiene a su disposición una serie de servicios y podrá gestionar solicitudes, escritos y comunicaciones sin necesidad de desplazarse.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-xs-12 margen text-block">
                                    <ul className="col-md-12 listado-menu mt10 triangle bordeOut onlyone">
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Inscripción</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Cotización / Recaudación de Empresarios</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Información para empresas sobre prestaciones</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="#">Información a proveedores</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="col-2" />

                </div>

            </div>
        );
    }
}

const css = `.texto{text-align: justify;}`;
document.head.appendChild(document.createElement("style")).textContent = css;

const css2 = `#marginRow{margin-top: 10px;}`;
document.head.appendChild(document.createElement("style")).textContent = css2;

export default Main;