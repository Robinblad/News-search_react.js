function News (props) {
  const {
    id,
    type,
    sectionName,
    webPublicationDate,
    webTitle,
    webUrl
  } = props;

let titleStyle = {};
let sectionNameStyle = {};
let webUrlStyle = {};

if (sectionName === 'Opinion') {
  titleStyle = {color: '#c69751'}; sectionNameStyle = {backgroundColor: '#c69751', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleOpinion: true };
}
if (sectionName === 'Fashion') {
  titleStyle = {color: '#c651b0'}; sectionNameStyle = {backgroundColor: '#c651b0', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleFashion: true };
}
if (sectionName === 'Politics') {
  titleStyle = {color: '#769d6a'}; sectionNameStyle = {backgroundColor: '#769d6a', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStylePolitics: true };
}
if (sectionName === 'Technology') {
  titleStyle = {color: '#c65151'}; sectionNameStyle = {backgroundColor: '#c65151', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleTechnology: true };
}
if (sectionName === 'Science') {
  titleStyle = {color: '#5164c6'}; sectionNameStyle = {backgroundColor: '#5164c6', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleScience: true };
}
if (sectionName === 'UK news') {
  titleStyle = {color: '#51c6a9'}; sectionNameStyle = {backgroundColor: '#51c6a9', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleUknews: true };
}
if (sectionName === 'Film') {
  titleStyle = {color: '#8051c6'}; sectionNameStyle = {backgroundColor: '#8051c6', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleFilm: true };
}
if (sectionName === 'Education') {
  titleStyle = {color: '#8aa973'}; sectionNameStyle = {backgroundColor: '#8aa973', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleEducation: true };
}
if (sectionName === 'Sport') {
  titleStyle = {color: '#0077B6'}; sectionNameStyle = {backgroundColor: '#0077B6', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleSport: true };
}
if (sectionName === 'Life and style') {
  titleStyle = {color: '#d28660'}; sectionNameStyle = {backgroundColor: '#d28660', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleLife: true };
}
if (sectionName === 'World news') {
  titleStyle = {color: '#e67a7a'}; sectionNameStyle = {backgroundColor: '#e67a7a', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleWorldnews: true };
}
if (sectionName === 'Media') {
  titleStyle = {color: '#787dc7'}; sectionNameStyle = {backgroundColor: '#787dc7', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleMedia: true };
}
if (sectionName === 'Games') {
  titleStyle = {color: '#a85ee8'}; sectionNameStyle = {backgroundColor: '#a85ee8', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleGames: true };
}
if (sectionName === 'Business') {
  titleStyle = {color: '#6fbcc3'}; sectionNameStyle = {backgroundColor: '#6fbcc3', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleBusiness: true };
}
if (sectionName === 'Australia news') {
  titleStyle = {color: '#c9e67a'}; sectionNameStyle = {backgroundColor: '#c9e67a', color: '#ffffff', padding: '0px 8px'}; webUrlStyle = { webUrlStyleAustralia: true };
}
if (sectionName === 'Football') {
  titleStyle = {color: '#b9bb7a'}; sectionNameStyle = {backgroundColor: '#b9bb7a', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleFootball: true };
}
if (sectionName === 'US news') {
  titleStyle = {color: '#786d93'}; sectionNameStyle = {backgroundColor: '#786d93', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleUsnews: true };
}
if (sectionName === 'Travel') {
  titleStyle = {color: '#6d553c'}; sectionNameStyle = {backgroundColor: '#6d553c', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleTravel: true };
}
if (sectionName === 'Environment') {
  titleStyle = {color: '#0d7029'}; sectionNameStyle = {backgroundColor: '#0d7029', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleEnvironment: true };
}
if (sectionName === 'Books') {
  titleStyle = {color: '#683856'}; sectionNameStyle = {backgroundColor: '#683856', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleBooks: true };
}
if (sectionName === 'Television & radio') {
  titleStyle = {color: '#6b7c00'}; sectionNameStyle = {backgroundColor: '#6b7c00', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleTelevision: true };
}
if (sectionName === 'News') {
  titleStyle = {color: '#5a64a6'}; sectionNameStyle = {backgroundColor: '#5a64a6', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleNews: true };
}
if (sectionName === 'Music') {
  titleStyle = {color: '#6f7f84'}; sectionNameStyle = {backgroundColor: '#6f7f84', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleMusic: true };
}
if (sectionName === 'Culture') {
  titleStyle = {color: '#6d9383'}; sectionNameStyle = {backgroundColor: '#6d9383', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleCulture: true };
}
if (sectionName === 'Society') {
  titleStyle = {color: '#8e6d93'}; sectionNameStyle = {backgroundColor: '#8e6d93', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleSociety: true };
}
if (sectionName === 'Art & design') {
  titleStyle = {color: '#dfa286'}; sectionNameStyle = {backgroundColor: '#dfa286', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleArt: true };
}
if (sectionName === 'Money') {
  titleStyle = {color: '#92936f'}; sectionNameStyle = {backgroundColor: '#92936f', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleMoney: true };
}
if (sectionName === 'Stage') {
  titleStyle = {color: '#995793'}; sectionNameStyle = {backgroundColor: '#995793', color: '#ffffff', padding: '0px 15px'}; webUrlStyle = { webUrlStyleStage: true };
}


  return (
    <div id={id} className="card">
      <h1 className="webTitle" style={titleStyle}>{webTitle}</h1>
      <div className="line"></div>
      <div className="card-content">
      <h5 className="sectionName" style={sectionNameStyle}>{sectionName}</h5>

      <p className="webPublicationDate">{webPublicationDate}</p>
      </div>

      <div className="webUrl-wrapper">
      <a className={`webUrl ${Object.keys(webUrlStyle)[0]}`} href={webUrl} target="_blank" rel="noopener noreferrer" onMouseEnter={(e) => e.target.style.fontWeight = 'bold'} onMouseLeave={(e) => e.target.style.fontWeight = 'normal'} onClick={() => this.handleLinkClick(webUrl)}>Read the article</a>
      </div>
    </div>

  )
}

export {News};