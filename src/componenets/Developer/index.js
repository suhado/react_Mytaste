import React from 'react';
import me from '../../images/me.PNG';
import {
  FiMail,
  FiPhone
} from 'react-icons/fi';

import {
    Container,
    Icon,
    DeveloperWrap,
    DeveloperInfo,
    Name,
    Img,
    Icons,
    ContactWrap,
    Phone,
    Email
} from './DeveloperElements';

const Developer = () => {
  return (
    <>
      <Container>
      <Icon to="/react_Mytaste">SUHA</Icon>
      <DeveloperWrap>
        <DeveloperInfo>
          <Img src={me}></Img>
          <Name>Jeong SuHa</Name>
          <ContactWrap>
            <Phone>
              <Icons>
                <FiPhone />
              </Icons>
              010-4966-2123
            </Phone>
            <Email>
              <Icons>
                <FiMail />
              </Icons>
              suha@sookmyung.ac.kr
            </Email> 
          </ContactWrap>
        </DeveloperInfo>      
      </DeveloperWrap>
      </Container>
    </>
  )
}

/* <FromWrap>
  <FromContent>
    <Form action="#">
      <FormH1>Sign in to your account</FormH1>
      <FormLabel htmlFor="for">Email</FormLabel>
      <FormInput type="email" required />
      <FormLabel htmlFor="for">Password</FormLabel>
      <FormInput type="password" required />
      <FormButton type="submit">Continue</FormButton>
      <Text>Forgot password</Text>
    </Form>
  </FromContent>
</FromWrap> */

export default Developer;
