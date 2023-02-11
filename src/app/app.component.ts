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
    section: "Terror",
    hero: [
    {
      title: "Apostol",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Terror\apostol.jpg",
        alt: "apostol",
      }
    },
    {
      title: "Calle del Terror",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Terror\calleterror.jpg",
        alt: "calle terror",
      }
    },
    {
      title: "Infierno en el Agua",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Terror\infiernoagua.webp",
        alt: "infierno agua",
      }
    },
    {
      title: "Insidious 2",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Terror\insidious2.webp",
        alt: "insidious2",
      }
    },
    {
      title: "Life",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Terror\life.webp",
        alt: "life",
      }
    },
    {
      title: "Malasaña",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Terror\malasana.webp",
        alt: "malasana",
      }
    },
    {
      title: "Multiple",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Terror\multiple.webp",
        alt: "multiple",
      }
    },
    {
      title: "Reflejos",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Terror\reflejos.webp",
        alt: "reflejos",
      }
    }]
  }

  public comedyFilms: GaleryFilms = {
    section: "Comedia",
    hero: [
    {
      title: "Casi 300",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\casi300.webp",
        alt: "casi 300",
      }
    },
    {
      title: "Cazafantasmas",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\cazafantasmas.webp",
        alt: "cazafantasmas",
      }
    },
    {
      title: "Dictador",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\dictador.webp",
        alt: "dictador",
      }
    },
    {
      title: "Erase Hollywood",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\erasehollywood.webp",
        alt: "erase hollywood",
      }
    },
    {
      title: "Family Guy",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\familyguy.webp",
        alt: "family guy",
      }
    },
    {
      title: "Juerga",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\juerga.webp",
        alt: "juerga",
      }
    },
    {
      title: "La Terminal",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\laterminal.webp",
        alt: "la terminal",
      }
    },
    {
      title: "Padres de Ella",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\padresella.webp",
        alt: "padres de ella",
      }
    },
    {
      title: "Regreso al Futuro",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\regresoalfuturo.webp",
        alt: "regreso al futuro",
      }
    },
    {
      title: "Rick and Morty",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\rickandmorty.webp",
        alt: "rick and morty",
      }
    },
    {
      title: "Scary Movie 3",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\scarymovie3.webp",
        alt: "scary movie 3",
      }
    },
    {
      title: "Ted 2",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Comedia\ted2.webp",
        alt: "ted 2",
      }
    }]
  }
  
  public topTen: GaleryFilms = {
    section: "Tendencia",
    hero: [
    {
      title: "La Casa de Papel",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Top10\1-papel.webp",
        alt: "papel",
      }
    },
    {
      title: "La Reina del Flow",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Top10\2-reina.webp",
        alt: "reina",
      }
    },
    {
      title: "Titanes",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Top10\3-titanes.webp",
        alt: "titanes",
      }
    },
    {
      title: "Lost in Space",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Top10\4-lostinspace.webp",
        alt: "lostinspace",
      }
    },
    {
      title: "Donde Caben Dos",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Top10\5-dondecaben.webp",
        alt: "donde caben dos",
      }
    },
    {
      title: "Aquí no hay quien viva",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Top10\6-aquinohay.webp",
        alt: "aqui no hay",
      }
    },
    {
      title: "Blacklist",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Top10\7-blacklist.webp",
        alt: "black list",
      }
    },
    {
      title: "Ricosy Mimados",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Top10\8-ricos.webp",
        alt: "ricos",
      }
    },
    {
      title: "El Poder del Perro",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Top10\9-poder.webp",
        alt: "poder",
      }
    },
    {
      title: "The Good Doctor",
      image: {
        src: "./Netflix.App\src\app\componentes\films\assets\Top10\10-gooddoctor.webp",
        alt: "good doctor",
      }
    }]
  }

}
