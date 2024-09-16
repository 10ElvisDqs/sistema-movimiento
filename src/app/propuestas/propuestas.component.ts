import { Component } from '@angular/core';
import { Propuesta } from '../interfaces/Propuesta.interface';

@Component({
  selector: 'app-propuestas',
  templateUrl: './propuestas.component.html',
  styleUrl: './propuestas.component.css'
})
export class PropuestasComponent {

  propuestas = [
    {
      imageSrc: 'undraw_certificate_re_yadi (1).svg',
      category: 'Propuestas Académicas',
      title: '1. Propuestas Académicas:',
      proposals: [
        'Exigir a las autoridades que ejecuten la descentralización total académica-administrativa.',
        'Aprobar el descuento del 50% de gratuidad, para la maestría de todos los estudiantes de la FINOR.',
        'Crear una brigada estudiantil de apoyo académico e institucional.',
        'Luchar por la carga horaria completa para todos los auxiliares.',
        'Activar las titulaciones intermedias en todas las carreras.'
      ]
    },
    {
      imageSrc: 'undraw_spreadsheet_re_cn18 (1).svg',
      category: 'Propuestas Institucionales',
      title: '2. Propuestas Institucionales:',
      proposals: [
        'Fiscalizar y exigir al decano y vicedecano que cumplan sus funciones.',
        'Exigir el estricto cumplimiento del estatuto orgánico.',
        'Hacer respetar los derechos del estudiante.',
        'Fiscalizar la distribución de los diferentes tipos de becas.',
        'Crear una gaceta facultativa.',
        'Garantizar la designación inmediata del defensor universitario.'
      ]
    },
    {
      imageSrc: 'undraw_educator_re_ju47.svg',
      category: 'Propuestas de Bienestar Estudiantil',
      title: '3. Propuestas de Bienestar Estudiantil:',
      proposals: [
        'Gestionar la construcción de un albergue estudiantil.',
        'Fiscalizar y exigir un seguro universitario digno.',
        'Incentivar y apoyar la cultura y el arte.',
        'Exigir el arreglo de los ascensores y baños.',
        'Crear la primera liga facultativa.'
      ]
    }
  ];

  // propuestas: Propuesta[] = [
  //   {
  //     categoria: 'Propuestas Académicas',
  //     items: [
  //       'Equipar la sala de estudio y todas las aulas de la carrera.',
  //       'Garantizar el multigrupo de todas las materias de ciclo común.',
  //       'Habilitar los cursos de verano para todas las materias.',
  //       // Añade el resto de los puntos
  //     ]
  //   },
  //   {
  //     categoria: 'Propuestas Institucionales',
  //     items: [
  //       'Hacer respetar los derechos del estudiante.',
  //       'Fiscalizar al director de carrera.',
  //       'Exigir el cumplimiento del calendario académico.',
  //       // Añade el resto de los puntos
  //     ]
  //   },
  //   {
  //     categoria: 'Propuestas de Bienestar Estudiantil',
  //     items: [
  //       'Gestionar un WiFi gratuito para todos los estudiantes.',
  //       'Exigir a las autoridades el servicio de limpieza digno.',
  //       'Garantizar un justo y digno aniversario para la carrera.',
  //       // Añade el resto de los puntos
  //     ]
  //   }
  // ];
}
