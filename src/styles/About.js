import Colors from './Colors';

export default {
  hero: {
    fontSize: '160pt',
    color: Colors.blue,
    fontWeight: '400',
    paddingTop: '20vh',
    marginBottom: '0',
    alignSelf: 'center',
  },
  aboutContainer: {
    padding: '0 25%',
    height: '95vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '1000px',
    fontFamily: 'Roboto, san-serif',
  },
  sectionContent: {
    textAlign: 'justify',
    fontWeight: 300,
    color: Colors.black,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  mobileHero: {
    fontSize: '90pt',
    color: Colors.blue,
    fontWeight: '400',
    paddingTop: '15vh',
    marginBottom: '0',
    alignSelf: 'center',
  },
  mobileAboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 10%',
    height: '95vh',
    minHeight: '800px',
    fontFamily: 'Roboto, san-serif',
  },
};
