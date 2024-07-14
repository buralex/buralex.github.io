import { emails } from '@/constants/common';

export function Contact() {
  return (
    <div className="container col-xl-10 col-xxl-8">
      <h1 className="text-center">Contact</h1>
      <div className="row align-items-center g-lg-5 py-5">
        <div className="mx-auto text-main text-center">
          <a
            className="mx-auto text-white h4"
            target="_blank"
            rel="noopener noreferrer"
            title="Open default mail program in a new tab"
            href={`mailto:${emails.info}`}
          >
            {emails.info}
          </a>
        </div>
      </div>
    </div>
  );
}
