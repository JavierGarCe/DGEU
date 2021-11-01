import React from 'react';
import '../assets/scss/main.scss';
import Button from "../containers/Button"
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface iMainProps {
    content: string;
}

class Main extends React.Component<iMainProps> {
    public render() {
        return (
            <div className='main'>
                <div className="row">
                    <div className="col">
                        <Button label={'Inicio'} icon={faBars} backgroundColor={'#e6ede7'} size={'medium'} />
                    </div>
                    <div className="col">
                        <Button label={'Conocenos'} icon={faBars} backgroundColor={'#e6ede7'} size={'medium'} />
                    </div>
                    <div className="col">
                        <Button label={'Trabajadores'} icon={faBars} backgroundColor={'#e6ede7'} size={'medium'} />
                    </div>
                    <div className="col">
                        <Button label={'Pensionistas'} icon={faBars} backgroundColor={'#e6ede7'} size={'medium'} />
                    </div>
                    <div className="col">
                        <Button label={'Empresarios'} icon={faBars} backgroundColor={'#e6ede7'} size={'medium'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1" />
                    <div className="col">

                        {this.props.content != 'Inicio' ? null :
                            <div role="tabpanel" id="elemento2-tab" aria-labelledby="elemento2-infoutilH3">
                                <h3 id="elemento2-infoutilH3">Información útil</h3>
                                <ul className=" disc" aria-label="Enlaces a Información útil">
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="/wps/portal/wss/internet/PortalEducativo" title="">Aula de la Seguridad Social</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="/wps/portal/wss/internet/CalendarioLaboral" title="">Calendario laboral</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="/wps/portal/wss/internet/InformacionUtil/10531/" title="">Formularios / Modelos</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="/wps/portal/wss/internet/InformacionUtil/32078/" title="">Internacional</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="/wps/portal/wss/internet/InformacionUtil/39641/" title="">Mutuas colaboradoras con la seguridad social</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="/wps/portal/wss/internet/InformacionUtil/9950/" title="">Oferta Publica de empleo</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="/wps/portal/wss/internet/InformacionUtil/596/" title="">Reutilización de información pública</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="/wps/portal/wss/internet/InformacionUtil/262/" title="">Subastas y concursos de bienes</a>
                                    </li>
                                    <li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <a target="_self" href="/wps/portal/wss/internet/InformacionUtil/44539/" title="">Trámites y gestiones</a>
                                    </li>
                                </ul>
                            </div>
                        }

                        {/* - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - - - - -- - - - - - */}
                        {this.props.content != 'Conocenos' ? null :
                            <div>
                                <h1 className="col-md-12 mb15 h1 title">Conócenos</h1>
                                <div className="col-sm-12 col-xs-12 margen text-block">
                                    <ul className="col-md-12 listado-menu mt10 triangle bordeOut onlyone">
                                        <li className="col-xs-12 col-md-6">
                                            <a href="https://www.seg-social.es/wps/portal/wss/internet/Conocenos/HistoriaSeguridadSocial">Historia de la Seguridad Social</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="https://www.seg-social.es/wps/portal/wss/internet/Conocenos/QuienesSomos">¿Quiénes somos?</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="https://www.seg-social.es/wps/portal/wss/internet/Conocenos/CartasServicios">Cartas de Servicios</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="https://www.seg-social.es/wps/portal/wss/internet/Conocenos/Publicaciones">Publicaciones</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="https://www.seg-social.es/wps/portal/wss/internet/Conocenos/DocumentacionGeneral">Documentación General</a>
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
                                        <p className="irdivjust">Esta página Web le ofrece información sobre <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/Afiliacion/32765">cómo darse de alta</a>, qué es <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/CotizacionRecaudacionTrabajadores">lo que debe aportar económicamente</a> y qué tipo de <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores">prestaciones</a> puede recibir según su situación laboral, tanto si es trabajador por cuenta propia como ajena.</p>
                                        <p className="irdivjust">También podrá conocer más sobre <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/Afiliacion/10548">regímenes</a>, <a href="https://www.seg-social.es/wps/portal/wss/internet/Normativa">normativa</a>, <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/Afiliacion/10547">convenios</a>, <span title="etcétera " className="irabbr"><abbr title="etcétera " lang="es">etc.</abbr></span>, y obtener <a href="https://www.seg-social.es/wps/portal/wss/internet/InformacionUtil/10531">formularios y modelos</a> para presentarlos en una <a href="https://www.seg-social.es/wps/portal/wss/internet/OficinaSeguridadSocial/">Oficina de la Seguridad Social</a>.</p>
                                        <p className="irdivjust">Desde aquí puede acceder a la <a href="https://sede.seg-social.gob.es/wps/portal/sede/sede/Ciudadanos/informes%20y%20certificados/01informes%20y%20certificados/!ut/p/z1/tVLLbsIwEPwVOPQYeR3HwTmGCqVQAqIoQHxBxnHAbXF4pFD69XVopR6qgCpU37w7ntnxDuJohrgRB70UpS6MeLX3lPtzgn0PB4D7EXQ7ECbxYxKQEYlcH03PAKg5ISB--f0EccSlKTflCqV7lam5LEypjM6K_R1UhTuQ-i0TmTBVRZu82K3VvnFqSLUrda6lOEMB17QqgY3UGUoDhbOceguHCkIdz2Wew5R0HVcqcLOcUUrFt6GaiSG4amha6V1hOAMu_FlqZ2j9MABEtpy0YTwBF0NE0PSg1RElxvq1Sxr_0eLDL4UIj2ilMGTdpxEG1rpR4YueDhngHrh98GMGYTAaJ_0BJtDybqTvXVuCja1-3m55aLNVxem9RLP_CZdVcnfxfby0BkS5ciocmtWi64k262TNyMl5yeMO8dLe4aM9cPjidAybzU-DwccB/dz/d5/L2dBISEvZ0FBIS9nQSEh/" title="Enlace a otra web, no garantizamos la accesibilidad para personas con discapacidad. Enlace en una nueva ventana" target="_blank" lang="es">Sede Electrónica de la Seguridad Social</a>, donde tiene a su disposición una serie de servicios y podrá gestionar solicitudes, escritos y comunicaciones sin necesidad de desplazarse.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-xs-12 margen text-block">
                                    <ul className="col-md-12 listado-menu mt10 triangle bordeOut onlyone">
                                        <li className="col-xs-12 col-md-6">
                                            <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/Afiliacion">Afiliación</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/CotizacionRecaudacionTrabajadores">Cotización / Recaudación de Trabajadores</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores">Prestaciones / Pensiones de Trabajadores</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/TrabajadoresMar">Trabajadores del mar</a>
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
                                        <p className="irdivjust">Esta página Web le ofrece información sobre las <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/12778">prestaciones económicas y sociales</a> a las que usted o sus familiares pueden tener derecho, como <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963">pensiones de jubilación</a>, <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10964">viudedad, orfandad </a>y otros derechos.</p>
                                        <p className="irdivjust">Puede conocer las <a href="https://www.seg-social.es/wps/portal/wss/internet/Pensionistas/Pensiones">modalidades y características</a> de estas prestaciones, los requisitos de acceso, importe y duración de las mismas, <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores">dónde y cómo solicitarlas</a>, <a href="https://www.seg-social.es/wps/portal/wss/internet/Pensionistas/Revalorizacion">revalorización</a>, <a href="https://www.seg-social.es/wps/portal/wss/internet/Pensionistas/Derechos">derechos</a>, <a href="https://www.seg-social.es/wps/portal/wss/internet/Pensionistas/obligaciones">obligaciones</a>, y todo aquello que pueda ser de su interés en su condición de pensionista. También puede obtener <a href="https://www.seg-social.es/wps/portal/wss/internet/Pensionistas/Servicios">formularios y modelos</a> para presentar en una <a href="https://www.seg-social.es/wps/portal/wss/internet/OficinaSeguridadSocial/">Oficina de la Seguridad Social</a>.</p>
                                        <p className="irdivjust">Desde aquí puede acceder a la <a href="https://sede.seg-social.gob.es/wps/portal/sede/sede/Ciudadanos/pensiones/03pensiones/!ut/p/z1/pVJdT8IwFP0tPPDY9PZjX4_DkAkyyCQD1hcytw6q0g2YoP56OzRKYoAofeo9vT3ntPdggWdY6HSnFmmtSp0-mzoR9pwRmxMPyCCAXhf8OLyLPRaxgNp4emiAE8sHLM7fn2CBRabrql7iZCtzOc9KXUut8nLbhgZoQ6Ze8jRPdYNUUm-NNWm2wL6LhqTKVI6TjFGWZgVBLJMc8cLhyKN5gbhLC9eWlkW592X6hCvwLpqeNnoXGA4NZ_4lMR6cHwaAwMBxB8YToAQChqc7Jfc41uVmZQYx_uMTb38pBCSyGoWR27uPCLjOlQqf9NbIBdIHOgA7dMH3onE8GBIGDr-Svn9pCCaa6nG9Fr7JTxOZ1xrP_h8gw0Y34U24MCbTeomULko8Ozo_bq5W8cplb-ipCLuMJ_3de2eIxMPb3m-1PgB08r8-/dz/d5/L2dBISEvZ0FBIS9nQSEh/" title="Enlace a otra web, no garantizamos la accesibilidad para personas con discapacidad. Enlace en una nueva ventana" target="_blank" lang="es">Sede Electrónica de la Seguridad Social</a>, donde tiene a su disposición una serie de servicios y podrá gestionar solicitudes, escritos y comunicaciones sin necesidad de desplazarse.</p>
                                    </div>
                                </div>
                                <div id="estructura" className="col-xs-12 col-md-12 mt0 niv-content">
                                    <div className="col-sm-12 col-xs-12 margen text-block">
                                        <ul className="col-md-12 listado-menu mt10 triangle bordeOut onlyone">
                                            <li className="col-xs-12 col-md-6">
                                                <a href="/wps/portal/wss/internet/Pensionistas/Pensiones">Pensiones</a>
                                            </li>
                                            <li className="col-xs-12 col-md-6">
                                                <a href="/wps/portal/wss/internet/Pensionistas/GestionPago">Gestión / Pago</a>
                                            </li>
                                            <li className="col-xs-12 col-md-6">
                                                <a href="/wps/portal/wss/internet/Pensionistas/Revalorizacion">Revalorización</a>
                                            </li>
                                            <li className="col-xs-12 col-md-6">
                                                <a href="/wps/portal/wss/internet/Pensionistas/Derechos">Derechos</a>
                                            </li>
                                            <li className="col-xs-12 col-md-6">
                                                <a href="/wps/portal/wss/internet/Pensionistas/obligaciones">Obligaciones</a>
                                            </li>
                                            <li className="col-xs-12 col-md-6">
                                                <a href="/wps/portal/wss/internet/Pensionistas/Servicios">Servicios</a>
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
                                        <p className="irdivjust" id="texto">Esta página Web le ofrece la información que necesita para la gestión de su empresa sobre <a href="https://sede.seg-social.gob.es/wps/portal/wss/internet/Empresarios/Inscripcion">inscripción, altas, bajas,</a> <a href="https://sede.seg-social.gob.es/wps/portal/wss/internet/Empresarios/CotizacionRecaudacionEmpresarios">cotización/recaudación,</a> <a href="https://sede.seg-social.gob.es/wps/portal/wss/internet/Empresarios/InformacionAcreedores">pagos a los acreedores</a> de la Seguridad Social, <span className="irnula">|</span><span title="etcétera " className="irabbr"><abbr title="etcétera " lang="es">etc.</abbr></span>, así como los <a href="https://sede.seg-social.gob.es/wps/portal/wss/internet/InformacionUtil/10531">formularios y modelos</a> que puede presentar en cualquier <a href="https://sede.seg-social.gob.es/wps/portal/wss/internet/OficinaSeguridadSocial/">Oficina de la Seguridad Social</a>.</p>
                                        <p className="irdivjust" id="texto">Puede acceder al <a href="https://sede.seg-social.gob.es/wps/portal/wss/internet/InformacionUtil/5300">Sistema RED</a> (Remisión Electrónica de Datos), servicio por el que se realizan gestiones e intercambios de información y documentos relativos a cotización, afiliación y remisión de partes de alta y baja de la prestación económica de incapacidad temporal.</p>
                                        <p className="irdivjust" id="texto">Además la Seguridad Social pone a disposición de las empresas el <a href="https://sede.seg-social.gob.es/wps/portal/wss/internet/Empresarios/PrestacionesPensionesEmpresarios/de602366-4174-421c-9d4d-3cac0963f301/16696c28-90a1-4502-8f12-d422dac6269c#16696c28-90a1-4502-8f12-d422dac6269c">servicio de comunicación relativa a las prestaciones</a> que perciben sus trabajadores.<br /></p>
                                        <p className="irdivjust" id="texto">Desde aquí puede acceder a la <a href="https://sede.seg-social.gob.es/wps/portal/sede/sede/EmpresasyProfesionales/informes%20y%20certificados/01informes%20y%20certificados/!ut/p/z1/rVRbU6MwGP0r-uBjJl9uJTyio6y12Ol2sYUXJ4SgWQVqYWvrr99QnXFGh3bXyguT8HEuOQdwiuc4rdTK3qnW1pV6dOskHdwyMuDEBzIK4fIcgji6in02YWEg8Gw7AD1XADjd_f4NTnGqq3bR3uOkMbm51XXVmsrmdXMC3cYJmHKxNI1ya1sV9bI0zdHmSJtlawur1XYQSM-jDn6hbY4TJ0dlFDSiOTDEeVYgX_EMeTwjwDLtCcHe7PToBX-vnVnHtwdhO7DjxBKnwXtHAAjddnwK0xugBEIncmXNM44r59dFNH236BuSF8J5EooJxKnkSBpNEdUGaF5IIYTCPz4xhGQiOoaxvPw5ISC9Axle4cVYAhkCHcEgkhD4k2k8uiYMPH4g_HBnCHTQldb-fnpKA9esrkzrFs97qqXtn1zlqqq_Vi7HRJfRWXTnDKj2HnVzeN473Q_0MZErl3cQX4x9HnvUCeg_sn-q9R549i3wvYF7B8IP9311_xH4Qf-Sb4t7UcalZBv0UETnjCfD1cvpNUqzzVo-_yrKs2x7m8kmCI6P_wK9TmM0/dz/d5/L2dBISEvZ0FBIS9nQSEh/" title="Enlace a otra web, no garantizamos la accesibilidad para personas con discapacidad. Enlace en una nueva ventana" target="_blank" lang="es">Sede Electrónica de la Seguridad Social</a>, donde tiene a su disposición una serie de servicios y podrá gestionar solicitudes, escritos y comunicaciones sin necesidad de desplazarse.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-xs-12 margen text-block">
                                    <ul className="col-md-12 listado-menu mt10 triangle bordeOut onlyone">
                                        <li className="col-xs-12 col-md-6">
                                            <a className="/wps/portal/wss/internet/Empresarios/Inscripcion">Inscripción</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="/wps/portal/wss/internet/Empresarios/CotizacionRecaudacionEmpresarios">Cotización / Recaudación de Empresarios</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="/wps/portal/wss/internet/Empresarios/PrestacionesPensionesEmpresarios">Información para empresas sobre prestaciones</a>
                                        </li>
                                        <li className="col-xs-12 col-md-6">
                                            <a href="/wps/portal/wss/internet/Empresarios/InformacionAcreedores">Información a proveedores</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="col-1" />

                </div>

            </div>
        );
    }
}

const css = `.texto{text-align: justify;}`;
document.head.appendChild(document.createElement("style")).textContent = css;

export default Main;