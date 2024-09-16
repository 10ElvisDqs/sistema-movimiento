import { Component } from '@angular/core';
import { TeamMember } from '../interfaces/TeamMember.interface';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/leonard-krasner'
    },
    {
      name: 'Floyd Miles',
      role: 'Principal Designer',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/floyd-miles'
    },
    {
      name: 'Emily Selman',
      role: 'VP, User Experience',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/emily-selman'
    },
    {
      name: 'Kristin Watson',
      role: 'VP, Human Resources',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/kristin-watson'
    },
    {
      name: 'Emma Dorsey',
      role: 'Senior Developer',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/emma-dorsey'
    },
    {
      name: 'Emma Dorsey',
      role: 'Senior Developer',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/emma-dorsey'
    },
    {
      name: 'Emma Dorsey',
      role: 'Senior Developer',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/emma-dorsey'
    },
    {
      name: 'Emma Dorsey',
      role: 'Senior Developer',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/emma-dorsey'
    },
    {
      name: 'Emma Dorsey',
      role: 'Senior Developer',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/emma-dorsey'
    },
    {
      name: 'Emma Dorsey',
      role: 'Senior Developer',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/emma-dorsey'
    },
    {
      name: 'Emma Dorsey',
      role: 'Senior Developer',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/emma-dorsey'
    },
    {
      name: 'Alicia Bell',
      role: 'Junior Copywriter',
      imageUrl: 'logo.webp',
      linkedinUrl: 'https://www.linkedin.com/in/alicia-bell'
    }
  ];

}
