import { trigger, style, transition, animate, query, group, animateChild, sequence } from '@angular/animations';

export const fadeInFadeOut =
  trigger('fadeInFadeOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('3s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('.3s', style({ opacity: 0 }))
    ])
  ])
 
  export const slideInAnimation =
  trigger('routeTransition', [
    // I know that you can do *=>* here, but doing so breaks the animation on page load for some reason.
    transition('homePage <=> resumePage, homePage <=> aboutPage, homePage <=> projectsPage, homePage <=> contactPage, resumePage <=> aboutPage, resumePage <=> projectsPage, resumePage <=> contactPage, aboutPage <=> projectsPage, aboutPage <=> contactPage, projectsPage <=> contactPage', [
      //set up parent container
      style({ 
        position: 'relative',
        height: '100%',
        width: '1000px' 
      }),
      //Set up entering and leaving components
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      //Fade out leaving component and fade in entering component
      query(':enter', [style({opacity: 0 })]),
      sequence([
        query(':leave', [animate('.4s', style({opacity: 0 }))]),
        query(':enter', [animate('.4s', style({opacity: 1}))])
      ]),

    ]),
  ])

  export const projectSlide =
  trigger('project', [
    transition('selectPage => *',[
      style({ 
        position: 'relative',
        height: '100%',
        width: '1000px' 
      }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({opacity: 0 })], { optional: true }),
      query(':leave', animateChild()),
      sequence([
        query(':leave', [animate('.4s', style({opacity: 0 }))]),
        query(':enter', [animate('.4s', style({opacity: 1}))], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ])