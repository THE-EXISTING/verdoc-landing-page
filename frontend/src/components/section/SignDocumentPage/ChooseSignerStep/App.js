import React from 'react'
// import styled from 'styled-components'
// import { Document, Page } from 'react-pdf'
// import MockPDF from '../../../../images/mock_pdf.pdf'
// import TextDetail from '../../../common/DetailText'
// import R from '../../../resources/R'
// import Button from '@material-ui/core/Button'
// import CircularProgress from '@material-ui/core/CircularProgress'
import ViewPortSigning from '../Sign/ViewPortSigning'
// import { Link, navigate } from 'gatsby'
import ChooseSigner from '../Sign/ChooseSigner'
// const WrapContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 8rem auto 5rem auto;
// `

// const ContainerViweportPDF = styled.div`
//   width: 392px;
//   max-width: 392px;
//   /* height: 598px; */
//   border: 1px solid ${R.colors.gray};
//   border-radius: 4px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// const IconBack = styled.img`
//   width: 22px;
//   height: 22px;
//   margin-left: 3rem;
//   cursor: pointer;
// `

// const ViewPort = styled.div`
//   width: 344px;
//   height: 488px;
//   box-shadow: -1px 4px 4px 0 rgba(0, 0, 0, 0.2),
//     1px -1px 4px 0 rgba(0, 0, 0, 0.19);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `
// const DataFile = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 344px;
//   margin: 1.2rem 0;
// `
// const WrapDetail = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   margin-left: 0.6rem;
//   & > p {
//     margin: 0.2em;
//   }
// `
// const IconPDF = styled.img`
//   width: 40px;
//   height: 40px;
// `

// const TextTitle = styled.p`
//   font-size: 16px;
//   font-family: 'Roboto-Regular';
//   font-width: bold;
// `

// const TextProps = styled.p`
//   font-family: 'Roboto-Regular';
//   font-size: 14px;
//   opacity: 0.6;
// `
// const BtnViewDoc = styled(Button)`
//   && {
//     font-family: 'Roboto-Medium';
//     color: ${R.colors.primary};
//     font-size: 0.8em;
//     margin: 2rem;
//     text-align: center;
//     width: 344px;
//   }
// `
// const ContainerChooseSigner = styled.div`
//   width: 464px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
// `
// const BtnSigner = styled(Button)`
//   && {
//     font-family: 'Roboto-Medium';
//     color: ${R.colors.primary};
//     font-size: 0.8em;
//     margin: 0.5rem 2rem;
//     text-align: center;
//     width: 163px;
//     height: 86px;
//   }
// `

// const WrapMenuSigner = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   margin-top: 2rem;
// `
// const CircleLoading = styled(CircularProgress)`
//   color: ${R.colors.primary};
// `

const App = () => {
  return (
    <>
      {/* <WrapContainer>
        <ContainerViweportPDF>
          <DataFile>
            <IconPDF src={R.images.ic_pdf_red} />
            <WrapDetail>
              <TextTitle>Sample_CERT</TextTitle>
              <TextProps>10Kb - Jun 25, 2011</TextProps>
            </WrapDetail>
          </DataFile>

          <ViewPort>
            <Document file={MockPDF} loading={<CircleLoading />}>
              <Page pageIndex={1} pageNumber={1} width={344} />
            </Document>
          </ViewPort>
          <BtnViewDoc variant="outlined" href={MockPDF} target="_blank">
            View Document
          </BtnViewDoc>
        </ContainerViweportPDF>
        <IconBack src={R.images.ic_back} />
        <ContainerChooseSigner>
          <TextDetail
            text="Who need to sign this document?"
            space="0"
            isWrap={false}
          /> */}
      <ViewPortSigning>
        {/* <WrapMenuSigner>
          <BtnSigner
            variant="outlined"
            onClick={() => navigate('/sign_documents/step/only_me')}
          >
            ONLY ME
          </BtnSigner>
          <BtnSigner variant="outlined" href={MockPDF}>
            me and others
          </BtnSigner>
          <BtnSigner variant="outlined" href={MockPDF}>
            just others
          </BtnSigner>
        </WrapMenuSigner> */}
        <ChooseSigner />
      </ViewPortSigning>
      {/* </ContainerChooseSigner>
      </WrapContainer> */}
    </>
  )
}

export default App
