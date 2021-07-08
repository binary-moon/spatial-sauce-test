import React from 'react'
import styled from 'styled-components'

import ContentWrapper from './ContentWrapper'

import { rem } from '../utils/mixins'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.white};
  padding: ${rem(32)};
  display: flex;
  flex-direction: column;

  ${props => props.theme.mediaQueries.desktop} {
    padding: ${rem(80)} ${rem(55)};
  }
`

const Title = styled.span`
  font-size: ${rem(30)};
  line-height: ${rem(40)};
  font-weight: 500;
  color: ${props => props.theme.colors.black};

  a {
    color: ${props => props.theme.colors.black};
    text-decoration: underline;
  }
`

const Form = styled.form`
  margin-top: ${rem(48)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${props => props.theme.mediaQueries.desktop} {
    margin-top: ${rem(100)};
  }

  > * + * {
    margin-top: ${rem(40)}
  }
`

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > label {
    font-size: ${rem(20)};
    line-height: ${rem(26)};
    font-weight: 500;
    color: ${props => props.theme.colors.black};
  }

  > input {
    height: ${rem(56)};
    line-height: ${rem(56)};
    margin-top: ${rem(10)};
    font-size: ${rem(20)};
    font-weight: 500;
    color: ${props => props.theme.colors.black};
    border: solid 1px ${props => props.theme.colors.black};
    padding: 0 ${rem(20)};
  }

  > textarea {
    padding: ${rem(20)};
    height: ${rem(246)};
    margin-top: ${rem(10)};
    font-size: ${rem(14)};
  }
`

const Button = styled.button`
  background: ${props => props.theme.colors.red};
  border: none;
  color: ${props => props.theme.colors.white};
  padding: ${rem(15)} ${rem(22)};
  font-size: ${rem(20)};
  line-height: ${rem(20)};
  display: flex;
  cursor: pointer;
  transition: .2s background;

  &:hover {
    background: ${props => props.theme.colors.yellow};
  }
`

const Arrow = styled.span`
  font-size: ${rem(26)};
  margin: 0 ${rem(8)} 0 0;
`

const ContactForm = () => {

  return (
    <ContentWrapper>
      <Wrapper>
        <Title>It’s easy to get in touch. Pop in your details below or give<br />Deniz a call on <a href="tel:0414 760 035">0414 760 035</a></Title>
        <Form method="POST" action="https://formspree.io/f/xpzkdgyj">
          <FormRow>
            <label>First Name</label>
            <input name="firstName" />
          </FormRow>
          <FormRow>
            <label>Last Name</label>
            <input name="lastName" />
          </FormRow>
          <FormRow>
            <label>Email</label>
            <input type="email" name="_replyto" />
          </FormRow>
          <FormRow>
            <label>Company</label>
            <input name="company" />
          </FormRow>
          <FormRow>
            <label>Comments</label>
            <textarea name="comments" />
          </FormRow>
          <Button type="submit"><Arrow>&#8594;</Arrow>Send</Button>
        </Form>
      </Wrapper>
    </ContentWrapper>
  )
}

export default ContactForm
