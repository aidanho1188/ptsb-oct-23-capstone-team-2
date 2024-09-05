import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {FaLinkedin, FaGithub, FaEnvelope, FaDiscord} from 'react-icons/fa'
import './Contact.css'

import PropTypes from 'prop-types'
import {toast} from 'react-toastify'

function Contact({contactInfo}) {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Discord username copied to clipboard', {autoClose: 4000})
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
        toast.error('Failed to copy Discord username to clipboard', {autoClose: 4000})
      })
  }
  return (
    <div className='contact-section'>
      {contactInfo.map((contact, index) => (
        <div className='contact-info' key={index}>
          <h6 className='contact-heading'>
            <Avatar>
              <AvatarImage src={contact.avatar} />
              <AvatarFallback>{contact.inital}</AvatarFallback>
            </Avatar>
            {contact.name}
          </h6>
          <ul className='contact-list'>
            <li className='contact-item'>
              <FaLinkedin className='contact-icon' />
              <a href={`https://${contact.linkedIn}`} target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
            </li>

            <li className='contact-item'>
              <FaGithub className='contact-icon' />
              <a href={contact.github} target='_blank' rel='noopener noreferrer'>
                Github
              </a>
            </li>

            <li className='contact-item'>
              <FaEnvelope className='contact-icon' />
              <a href={contact.email} target='_blank' rel='noopener noreferrer'>
                Email
              </a>
            </li>

            <li className='contact-item'>
              <FaDiscord className='contact-icon' />
              <a
                href='#'
                onClick={(event) => {
                  event.preventDefault()
                  copyToClipboard(contact.discord)
                }}
              >
                {contact.discord}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

Contact.propTypes = {
  contactInfo: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      initial: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      linkedIn: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      discord: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Contact
