import styled from 'styled-components'

const InnerStyledSection = styled.div`
  margin: auto 10px;
  ${'' /* padding: 1% 0; */}
  @media (min-width: ${({theme}) => theme.large.start}) {
    margin: auto;
    width: 100%;
    max-width: ${({theme}) => theme.large.inner};
  };
  @media (min-width: ${({theme}) => theme.xlarge.start}) {
    width: 100%;
    max-width: ${({theme}) => theme.xlarge.inner};
  };
`

export default InnerStyledSection