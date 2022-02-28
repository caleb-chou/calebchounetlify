import Image from 'next/image';
import Container from 'components/ui/Container';
import ContactForm from './ContactForm';
import contactIllustration from 'assets/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';

const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>Let's Talk!</h1>
      <p>Contact me here, or use social media</p>
      <ContactForm />
    </Details>
    <Thumbnail>
      <Image src={contactIllustration} alt="I’m Caleb and I’m a Software Engineer & Student!" />
    </Thumbnail>
  </Wrapper>
);

export default Contact;
