import { Injectable } from '@angular/core';
import { IProject } from '@proyectos/interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService
{
  private readonly _imgPath: string = 'assets/images';
  private readonly _imgProjectsPath: string = `${this._imgPath}/projects`;

  private readonly _project = (
    id: number,
    etiqueta: string,
    title: string,
    description: string,
    date: string,
    imgList: string[],
  ): IProject => ({
    date,
    description,
    etiqueta,
    id,
    imgList,
    title,
  });
  private readonly _projectsList: IProject[] = [
    this._project(
      1,
      'Cocinas',
      'Mesón de cocina en concreto con cerámica tipo mármol',
      `Fabricación de mesón de cocina en concreto, revestido con cerámica tipo mármol
      color negro. Se instaló lavadero de acero inoxidable con escurridor, dejando espacio
      inferior abierto para almacenamiento o futuras repisas.`,
      '11-09-2025',
      [`${this._imgProjectsPath}/cocina-meson-marmol_1.webp`],
    ),
    this._project(
      2,
      'Muebles de concreto',
      'Banco de concreto con acabado en cerámica tipo madera',
      `Construcción de banca de concreto revestida con cerámica imitación madera.
      Ideal para interiores o patios, combinando resistencia y estética. Se integró con
      pared decorada en mayólica de diseño tradicional.`,
      '11-09-2025',
      [`${this._imgProjectsPath}/banco-concreto-ceramica_1.webp`],
    ),
    this._project(
      3,
      'Lavaderos',
      'Lavadero de concreto con cerámica blanca',
      `Construcción de lavadero de concreto revestido con cerámica blanca texturizada.
      Incluye instalación de grifería, área de lavado y espacio auxiliar para mayor
      funcionalidad en el hogar.`,
      '11-09-2025',
      [`${this._imgProjectsPath}/lavadero-ceramica-blanca_1.webp`],
    ),
    this._project(
      4,
      'Baños',
      'Mueble de lavamanos en concreto con cerámica',
      `Construcción de mueble de concreto para lavamanos, recubierto con cerámica tipo
      laja irregular. Se realizó la instalación del lavamanos, conexiones de agua y desagüe,
      dejando espacio para almacenamiento en la parte inferior.`,
      '10-09-2025',
      [
        `${this._imgProjectsPath}/lavamanos-concreto-ceramica_1.webp`,
        `${this._imgProjectsPath}/lavamanos-concreto-ceramica_2.webp`,
        `${this._imgProjectsPath}/lavamanos-concreto-ceramica_3.webp`,
      ],
    ),
    this._project(
      5,
      'Baños',
      'Revestimiento de baño con cerámica verde',
      `Revestimiento de baño con cerámica color verde. Se realizó la nivelación de paredes,
      instalación de enchape, sellado de juntas y preparación de la zona de ducha para las
      conexiones sanitarias.`,
      '10-09-2025',
      [`${this._imgProjectsPath}/bano-ceramica-verde_1.webp`],
    ),
    this._project(
      6,
      'Escaleras',
      'Escalera con acabado en cerámica tipo madera',
      `Construcción e instalación de una escalera de concreto reforzado con acabado en cerámica
      tipo madera. Se realizó el encofrado, vaciado, revestimiento y la colocación de baranda metálica
      para mayor seguridad.`,
      '11-09-2025',
      [
        `${this._imgProjectsPath}/escalera-madera-ceramica_1.webp`,
        `${this._imgProjectsPath}/escalera-madera-ceramica_2.webp`,
        `${this._imgProjectsPath}/escalera-madera-ceramica_3.webp`,
        `${this._imgProjectsPath}/escalera-madera-ceramica_4.webp`,
        `${this._imgProjectsPath}/escalera-madera-ceramica_5.webp`,
        `${this._imgProjectsPath}/escalera-madera-ceramica_6.webp`,
        `${this._imgProjectsPath}/escalera-madera-ceramica_7.webp`,
        `${this._imgProjectsPath}/escalera-madera-ceramica_8.webp`,
      ],
    ),
  ];

  readonly getProjectById = (id: number): IProject | undefined =>
    this._projectsList.find((project: IProject) => project.id === id);

  readonly getProjectsOrderedByDate = (): IProject[] =>
    this._projectsList.toSorted(
      (a: IProject, b: IProject) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}
