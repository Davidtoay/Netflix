import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GaleryFilms } from './componentes/films-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'Netflix.App';

  public terrorFilms: GaleryFilms = {
    section: "TERROR",
    hero: [
    {
      title: "Apostol",
      image: {
        src: "../assets/Terror/apostol.jpg",
        alt: "apostol",
      }
    },
    {
      title: "Calle del Terror",
      image: {
        src: "../assets/Terror/calleterror.jpg",
        alt: "calle terror",
      }
    },
    {
      title: "Infierno en el Agua",
      image: {
        src: "../assets/Terror/infiernoagua.webp",
        alt: "infierno agua",
      }
    },
    {
      title: "Insidious 2",
      image: {
        src: "../assets/Terror/insidious2.webp",
        alt: "insidious2",
      }
    },
    {
      title: "Life",
      image: {
        src: "../assets/Terror/life.webp",
        alt: "life",
      }
    },
    {
      title: "Malasaña",
      image: {
        src: "../assets/Terror/malasana.webp",
        alt: "malasana",
      }
    },
    {
      title: "Multiple",
      image: {
        src: "../assets/Terror/multiple.webp",
        alt: "multiple",
      }
    },
    {
      title: "Reflejos",
      image: {
        src: "../assets/Terror/reflejos.webp",
        alt: "reflejos",
      }
    }]
  }

  public comedyFilms: GaleryFilms = {
    section: "COMEDIA",
    hero: [
    {
      title: "Casi 300",
      image: {
        src: "../assets/Comedia/casi300.webp",
        alt: "casi 300",
      }
    },
    {
      title: "Cazafantasmas",
      image: {
        src: "../assets/Comedia/cazafantasmas.webp",
        alt: "cazafantasmas",
      }
    },
    {
      title: "Dictador",
      image: {
        src: "../assets/Comedia/dictador.webp",
        alt: "dictador",
      }
    },
    {
      title: "Erase Hollywood",
      image: {
        src: "../assets/Comedia/erasehollywood.webp",
        alt: "erase hollywood",
      }
    },
    {
      title: "Family Guy",
      image: {
        src: "../assets/Comedia/familyguy.webp",
        alt: "family guy",
      }
    },
    {
      title: "Juerga",
      image: {
        src: "../assets/Comedia/juerga.webp",
        alt: "juerga",
      }
    },
    {
      title: "La Terminal",
      image: {
        src: "../assets/Comedia/laterminal.webp",
        alt: "la terminal",
      }
    },
    {
      title: "Padres de Ella",
      image: {
        src: "../assets/Comedia/padresella.webp",
        alt: "padres de ella",
      }
    },
    {
      title: "Regreso al Futuro",
      image: {
        src: "../assets/Comedia/regresofuturo.webp",
        alt: "regreso al futuro",
      }
    },
    {
      title: "Rick and Morty",
      image: {
        src: "../assets/Comedia/rickandmorty.webp",
        alt: "rick and morty",
      }
    },
    {
      title: "Scary Movie 3",
      image: {
        src: "../assets/Comedia/scarymovie3.webp",
        alt: "scary movie 3",
      }
    },
    {
      title: "Ted 2",
      image: {
        src: "../assets/Comedia/ted2.webp",
        alt: "ted 2",
      }
    }]
  }
  
  public topTen: GaleryFilms = {
    section: "TENDENCIA",
    hero: [
    {
      title: "La Casa de Papel",
      image: {
        src: "../assets/Top10/_1-papel.webp",
        alt: "papel",
      }
    },
    {
      title: "La Reina del Flow",
      image: {
        src: "../assets/Top10/_2-reina.webp",
        alt: "reina",
      }
    },
    {
      title: "Titanes",
      image: {
        src: "../assets/Top10/_3-titanes.webp",
        alt: "titanes",
      }
    },
    {
      title: "Lost in Space",
      image: {
        src: "../assets/Top10/_4-lostinspace.webp",
        alt: "lostinspace",
      }
    },
    {
      title: "Donde Caben Dos",
      image: {
        src: "../assets/Top10/_5-dondecaben.webp",
        alt: "donde caben dos",
      }
    },
    {
      title: "Aquí no hay quien viva",
      image: {
        src: "../assets/Top10/_6-aquinohay.webp",
        alt: "aqui no hay",
      }
    },
    {
      title: "Blacklist",
      image: {
        src: "../assets/Top10/_7-blacklist.webp",
        alt: "black list",
      }
    },
    {
      title: "Ricosy Mimados",
      image: {
        src: "../assets/Top10/_8-ricos.webp",
        alt: "ricos",
      }
    },
    {
      title: "El Poder del Perro",
      image: {
        src: "../assets/Top10/_9-poder.webp",
        alt: "poder",
      }
    },
    {
      title: "The Good Doctor",
      image: {
        src: "../assets/Top10/_10-gooddoctor.webp",
        alt: "good doctor",
      }
    }]
  }

}
