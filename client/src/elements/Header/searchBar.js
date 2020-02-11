import styled from 'styled-components';

const searchBar = styled.div`
    position: absolute;
    top: 16px;
    left: 80px;
    border: 1px solid #EBEBEB;
    align-items:center;
    display:flex;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    height: 48px;
    ${(props) => (props.search === 'true' ? 'width: 600px;' : 'width: 460px;')};
    -webkit-transition: width 200ms ease-in !important;
    transition: width 200ms ease-in !important;
    `;

export default searchBar;

