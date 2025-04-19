import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

interface EventItem {
  company?: string;
  role?: string;
  date?: string;
  techStack?: string[];
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [TimelineModule, CardModule, TagModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})

export class WorkComponent {
  
  events: EventItem[];

  constructor() {
      this.events = [
          { company: 'Infodat International Inc', date: '06/23 - Present', role: 'Software Developer', techStack: ['Java, SQL, HTML, CSS, JavaScript, Pega']},
          { company: 'University of Houston, Clear Lake', date: '01/22 - 04/23', role: 'Research Assistant', techStack: ['Golang, MongoDB, CouchDB, Hyperledger Fabric']},
          { company: 'TATA Consultancy Services', date: '06/19 - 08/21', role: 'Associate System Engineer', techStack: ['Spring boot, Angular, Java, Typescript']},
      ];
  }

  ngOnInit() {
  }

}
