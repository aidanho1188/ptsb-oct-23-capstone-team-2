import Contact from './Contact'
import {useLocation} from 'react-router-dom'
import './Footer.css'

function Footer() {
  const location = useLocation()
  const footerLinks = [
    {href: '/', label: 'Dashboard'},
    {href: '/about', label: 'About Us'},
    {href: '/workorder-checkin', label: 'Check In'},
    {href: '/workorder-checkout', label: 'Check Out'},
    {href: '/workorder-create', label: 'Create Work Order'},
    {href: '/update-status', label: 'Update Status'},
    {href: '/work-activity', label: 'Work Order Activity'},
  ]

  // copy your discord id and paste it in after the last slash
  const contactInfo = [
    {
      name: 'Aidan Ho',
      inital: 'AH',
      avatar: 'https://github.com/aidanho1188.png',
      linkedIn: 'www.linkedin.com/in/aidan-ho',
      github: 'https://github.com/aidanho1188',
      email: 'mailto:aidanho23657@gmail.com',
      discord: 'aidanho23657',
    },
    {
      name: 'Daniela Watanabe',
      inital: 'DW',
      avatar: 'https://github.com/dwatanabe09.png',
      linkedIn: 'www.linkedin.com/in/daniela-watanabe-882361241/',
      github: 'https://github.com/dwatanabe09',
      email: 'mailto:danielawatanabe9@gmail.com',
      discord: 'daniiii4650',
    },
    {
      name: 'David Blumenshine',
      inital: 'AH',
      avatar: 'https://github.com/DavidBlumenshine.png',
      linkedIn: 'www.linkedin.com/in/davidblumenshine/',
      github: 'https://github.com/DavidBlumenshine',
      email: 'mailto:davidblumens@gmail.com',
      discord: 'dave_4556',
    },
  ]
  return (
    <footer className='footer-container'>
      <div className='info-container'>
        <div className='about-section'>
          <h6>About</h6>
          <p className='text-justify'>
            Aidaviela <i> ELEVATE YOUR CODE </i>. Our mission is to provide a simple and effective workorder management solution. We help business organize their tasks and improve their workflow. By using modern technology, we make it easier to manage work orders, reduce paperwork, and increase efficiency. Our platform is easy to use and can be tailored to fit the needs of different teams. We are dedicated to making our product better and ensuring our users are happy. We work hard to offer great
            value and support to everyone who uses our service. Our team is passionate about technology and committed to continuous improvement. We believe in creating tools that make work easier and more efficient for everyone.
          </p>
        </div>

        <div className='links-section'>
          <h6>Quick Links</h6>
          <ul className='links-list'>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`footer-links ${location.pathname === link.href ? 'active' : ''}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='hr-with-text'>Contact Us</div>

      <Contact contactInfo={contactInfo} />
      <hr />
      <div className='copyright'>
        <p className='copyright-text'>
          Copyright &copy; 2017 All Rights Reserved by
          <a href='/about'> Aidaviela</a>.
        </p>
      </div>
    </footer>
  )
}

export default Footer
