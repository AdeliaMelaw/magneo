import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  ['01', 'Certified copies', 'Ask about certifying a copy of an original document and any instructions from the organization requesting it.'],
  ['02', 'Affidavits and declarations', 'Tell us about the affidavit or declaration you need to complete and the instructions you have received.'],
  ['03', 'Documents requiring a witnessed signature', 'Share the type of document and its signing requirements so we can confirm whether the service is available.'],
];

const bring = [
  'The document and any instructions you received',
  'Identification that meets the confirmed requirements',
  'Original documents where required for the service',
  'Details of where the document will be submitted',
];

const appointmentSteps = [
  ['01', 'Tell us what you need', 'Describe the document, its intended use, and your preferred appointment time.'],
  ['02', 'Confirm the details', 'We confirm whether we can assist, what to bring, the fee, and appointment availability.'],
  ['03', 'Attend prepared', 'Bring the confirmed documents and identification. The required steps will be explained at your appointment.'],
];

const questions = [
  ['What identification should I bring?', 'Identification requirements depend on the service and provider. We’ll confirm what identification is required before your visit.'],
  ['Should I sign my document beforehand?', 'Wait until the appointment unless we confirm otherwise. Some documents must be signed in the provider’s presence.'],
  ['How is the fee confirmed?', 'The fee is confirmed before the appointment after we review the requested service and document requirements.'],
  ['What if my document will be used outside Canada?', 'Requirements depend on the destination and receiving authority. We need to review their instructions before confirming what assistance is available. Notarization alone may not complete every required step.'],
  ['Is my appointment confirmed when I submit the form?', 'No. Submitting the form is only a request. We’ll review the details and contact you to confirm availability and the appointment.'],
];

export default function NotaryDocumentDesk(){
  const [submitted, setSubmitted] = useState(false);

  useEffect(()=>{
    document.title = 'The Notary Desk | Fictional Website Concept';
    let description = document.querySelector('meta[name="description"]');
    if(!description){ description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional notary-services website concept created for the Magneo legal website portfolio.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if(!canonical){ canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/notary-document-desk/';
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return <div className="nd-page" id="top">
    <header className="nd-header">
      <Link className="nd-logo" to="/portfolio/" aria-label="The Notary Desk — back to portfolio"><span>ND</span><b>The Notary Desk</b></Link>
      <nav aria-label="Notary concept navigation">
        <a href="#nd-services">Services</a>
        <a href="#nd-bring">What to bring</a>
        <a href="#nd-appointment">Your appointment</a>
        <a href="#nd-faq">Questions</a>
      </nav>
      <a className="nd-button nd-header-button" href="#nd-request">Request an appointment</a>
    </header>

    <main>
      <section className="nd-hero" aria-labelledby="nd-hero-title">
        <div className="nd-hero-copy">
          <div className="nd-disclosure">Fictional website concept</div>
          <span className="nd-eyebrow">Notary services · Toronto</span>
          <h1 id="nd-hero-title">Your documents.<br/><em>Your next step, made clear.</em></h1>
          <p>Tell us what document you have and where it will be used. We’ll explain whether we can assist and what to prepare before your appointment.</p>
          <div className="nd-actions"><a className="nd-button" href="#nd-request">Request an appointment</a><a className="nd-text-link" href="#nd-bring">What should I bring? <span>↓</span></a></div>
        </div>
        <div className="nd-hero-art" aria-label="Blank papers, a document folder, and a pen arranged on a desk">
          <img src="/notary-document-desk-hero-v3.png" alt="Fictional notary service request arranged over an ink-blue document folder beside a pen"/>
          <small aria-hidden="true">Document desk · 01</small>
        </div>
      </section>

      <section className="nd-section nd-services" id="nd-services" aria-labelledby="nd-services-title">
        <div className="nd-section-head"><span>Services · 02</span><h2 id="nd-services-title">What do you need help with?</h2></div>
        <div className="nd-service-grid">{services.map(([number,title,copy])=><article key={number}><small>{number} / Document service</small><h3>{title}</h3><p>{copy}</p><i aria-hidden="true">↘</i></article>)}</div>
      </section>

      <section className="nd-section nd-bring" id="nd-bring" aria-labelledby="nd-bring-title">
        <div className="nd-bring-copy"><span>Prepare · 03</span><h2 id="nd-bring-title">A little preparation.<br/><em>A simpler appointment.</em></h2><p>Before your visit, we’ll confirm what identification, documents, and attendees are needed, and whether you should leave any signatures blank.</p></div>
        <ol>{bring.map((item,index)=><li key={item}><span>0{index+1}</span><b>{item}</b></li>)}</ol>
      </section>

      <section className="nd-section nd-appointment" id="nd-appointment" aria-labelledby="nd-appointment-title">
        <div className="nd-section-head"><span>Your appointment · 04</span><h2 id="nd-appointment-title">Know what happens<br/>before you arrive.</h2></div>
        <div className="nd-step-grid">{appointmentSteps.map(([number,title,copy])=><article key={number}><b>{number}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        <p className="nd-booking-note">An appointment request is reviewed before a booking is confirmed.</p>
      </section>

      <section className="nd-provider" aria-labelledby="nd-provider-title">
        <div className="nd-provider-image"><img src="/notary-provider-portrait.png" alt="Fictional notary provider seated at an orderly desk" loading="lazy"/></div>
        <div><span>Fictional provider profile</span><h2 id="nd-provider-title">A calm, organized appointment.</h2><p>The fictional provider in this concept begins by confirming the document, its intended use, and what you need to bring. Requirements and availability are reviewed before an appointment is confirmed.</p><a className="nd-text-link" href="#nd-request">Organize your appointment <span>↓</span></a></div>
      </section>

      <section className="nd-section nd-faq" id="nd-faq" aria-labelledby="nd-faq-title">
        <div className="nd-faq-intro"><span>Questions · 05</span><h2 id="nd-faq-title">Before your appointment</h2><p>Clear answers help you arrive with the right documents and realistic expectations.</p></div>
        <div className="nd-faq-list">{questions.map(([question,answer],index)=><details key={question} open={index===0}><summary><span>{String(index+1).padStart(2,'0')}</span>{question}<i aria-hidden="true"/></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="nd-request" id="nd-request" aria-labelledby="nd-request-title">
        <div className="nd-request-intro"><span>Appointment request · 06</span><h2 id="nd-request-title">Let’s get your appointment organized.</h2><p>Start with the general details. We’ll review your request before confirming whether the service and an appointment are available.</p></div>
        <form onSubmit={handleSubmit}>
          <label>Your name<input name="name" autoComplete="name" required/></label>
          <label>Email<input type="email" name="email" autoComplete="email" required/></label>
          <label>Phone <small>Optional</small><input type="tel" name="phone" autoComplete="tel"/></label>
          <label>Service needed<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Certified copy</option><option>Affidavit or declaration</option><option>Witnessing a signature</option><option>Not sure</option></select></label>
          <label>Preferred date <small>Optional</small><input type="date" name="date"/></label>
          <label className="nd-wide">Short description <small>Optional</small><textarea name="description" rows="4" aria-describedby="nd-helper"/></label>
          <p className="nd-helper nd-wide" id="nd-helper">Describe the document generally. Do not upload identification or include confidential document details.</p>
          <button className="nd-button nd-wide" type="submit">Request an appointment <span>↗</span></button>
          {submitted&&<p className="nd-form-response nd-wide" role="status">Demo form complete. No information was sent.</p>}
          <p className="nd-demo nd-wide">Portfolio demonstration only. Do not enter personal information. No appointment request will be sent.</p>
        </form>
      </section>
    </main>

    <footer className="nd-footer"><div><Link className="nd-logo" to="/portfolio/"><span>ND</span><b>The Notary Desk</b></Link><p>The Notary Desk and the provider shown are fictional. This website is an original portfolio concept and does not offer notary or legal services.</p></div><Link to="/portfolio/">Back to portfolio ↗</Link></footer>
  </div>;
}
