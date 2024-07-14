import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
import Button from '@/components/Common/Button';
import { CheckCircleFill } from '@/components/Common/Icons/CheckCircleFill';
import { mainApiUrl } from '@/utils';
import { CountdownTimer } from '@/components/Common/CountdownTimer';

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalBody, setModalBody] = useState<any>(null);

  const handleCloseModal = () => setShowModal(false);

  const showCommonError = () => {
    setShowModal(true);
    setModalBody(<p className="text-danger">Sorry, some server error.</p>);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = JSON.stringify({
      ...Object.fromEntries(formData.entries()),
      subject: 'Message from Uplium contact form',
    });

    setIsLoading(true);

    fetch(`${mainApiUrl}/emails/contact`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: formJson,
    })
      .then(async (response) => {
        if (response.ok) {
          setShowModal(true);
          setModalBody(
            <p className="text-main">
              <span className="text-teal pe-4">
                <CheckCircleFill style={{ scale: '3' }} />
              </span>
              Thank you for contacting us!
            </p>,
          );
          return;
        }

        const errorBody = await response.json();
        if (errorBody.error === 'Too Many Requests') {
          const rateLimitSeconds = 30;
          setShowModal(true);
          setModalBody(
            <div>
              <p className="text-main mb-0">
                Rate limit exceeded, please retry in {rateLimitSeconds} seconds.
              </p>
              <CountdownTimer
                onClose={handleCloseModal}
                timeSeconds={rateLimitSeconds}
              />
            </div>,
          );
          return;
        }

        showCommonError();
      })
      .catch((err) => {
        console.error(err);
        showCommonError();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="container col-xl-10 col-xxl-8">
      <h1 className="text-center">Contact</h1>
      <div className="row align-items-center g-lg-5 py-5">
        <div className="mx-auto text-main">
          <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3">
            <div className="form-floating mb-3">
              <input
                type="email"
                name="from"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                required={true}
              />
              <label htmlFor="floatingEmail">Email</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                name="text"
                id="floatingMessage"
                className="form-control"
                style={{ height: 100 }}
                placeholder="Enter Your Message"
                required={true}
              ></textarea>
              <label htmlFor="floatingMessage">Message</label>
            </div>

            <div className="d-flex align-items-center">
              <Button type="submit" className="btn-light btn-lg">
                Send message
              </Button>

              {isLoading && <span className="spinner-border ms-3 text-light" />}
            </div>
          </form>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="border-0 pb-0"></Modal.Header>

        <Modal.Body className="pt-0">
          <div className="mt-5 mb-5 fs-5 text-center">{modalBody}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
