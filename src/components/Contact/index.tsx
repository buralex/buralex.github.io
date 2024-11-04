import { emails } from '@/constants/common';
import { EnvelopeIcon } from '@/components/Common/icons/EnvelopeIcon';
import { LinkedInIcon } from '@/components/Common/icons/LinkedInIcon';

const contactListItemClass = 'col-xs-12 col-sm-6 col-lg-6 text-center mt-5';

export function Contact() {
  return (
    <div className="container col-xl-10 col-xxl-8">
      <h1 className="text-center">Contact</h1>

      <div className="row">
        <div className={contactListItemClass}>
          <a
            className="text-white h4"
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:${emails.personal}`}
            title="Open default mail program in a new tab"
          >
            <EnvelopeIcon height={30} />
            <br />
            {emails.personal}
          </a>
        </div>

        <div className={contactListItemClass}>
          <a
            href="https://www.linkedin.com/in/buralex"
            className="text-white h4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon height={30} />
            <br />
            linkedin.com/in/buralex
          </a>
        </div>
      </div>
    </div>
  );
}
