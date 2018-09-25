import styled from 'styled-components';

export const Container = styled.div`
  font-family:"BrandonText", Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  -webkit-box-align: center;
  -webkit-font-smoothing: antialiased;
  -ms-flex-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  padding: 0 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

export const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 5px;
  border-top: 1px solid #d8d9db;
  border-bottom: 1px solid #d8d9db;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
`;

export const DescriptionBody = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-height: 24px;
  text-overflow: ellipsis;
`;

export const DescriptionClamped = styled(DescriptionBody)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: calc(3*24px);
`;

export const ReadMore = styled.button`
  background: white;
  border: none;
  color: #da3743;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

export const StyledOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const OverviewContent = styled.div`
  display: grid;
  grid-template-columns: auto repeat(1, 50%);
  grid-column-gap: 10px;
  ${props => (props.collapsed
    ? `overflow: hidden;
    height: 375px;
    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: 1;
      left: 0;
      pointer-events: none;
      background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%);
      width: 100%;
      height: 375px;
    }`
    : ''
  )}
`;

export const Detail = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const MapDetail = styled(Detail)`
  padding-top: 8px;
  padding-bottom: 8px;
  color: #da3743;
  font-weight: 600;
`;

export const DetailBox = styled.div`
  display: flex;
  align-content: center;
`;

export const MapBox = styled(DetailBox)`
  flex-direction: column;
`;

export const DetailTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const Fa = styled.i`
  padding-top: 10px;
  padding-right: 5px;
`;

export const FaStar = styled(Fa)`
  color: #da3743;
`;

export const ExpandButton = styled.button`
  display: flex;
  justify-content: center;
  height: 3rem;
  background: white;
  border: 1px solid #d8d9db;
  font-size: 1rem;
  line-height: 1.5;
  width: 18rem;

  &:hover {
    border: 2px solid rgb(218, 55, 67);
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

export const Map = styled.div`
  margin-bottom: 16px;
`;

export const H3 = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const MenuButton = styled.button`
  ${props => (
    (props.active === props.i)
      ? `padding-top: 7px;
        padding-bottom: 7px;
        padding-left: 15px;
        padding-right: 15px;
        border: 2px solid rgb(218, 55, 67);`
      : `padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 16px;
        padding-right: 16px;
        border: 1px solid #d8d9db;`
  )}
  margin-right: 20px;
  margin-bottom: 20px;
  background: white;
  font-size: 0.875rem;
  font-weight: 500;
  
  &:hover {
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 15px;
    padding-right: 15px;
    border: 2px solid rgb(218, 55, 67);
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`;

export const MenuTitles = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
  border-top: 1px solid #d8d9db;
  border-bottom: 1px solid #d8d9db;
`;

export const MenuList = styled.div`
  display: grid;
  grid-template-columns: auto repeat(1, 50%);
  grid-column-gap: 40px;
  ${props => (
    props.collapsed
      ? `height: 400px;
      overflow: hidden;

      &:after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 1;
        left: 0;
        pointer-events: none;
        background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%);
        width: 100%;
        height: 400px;
      }`
      : ''
  )}
`;

export const MenuCollapsed = styled.div`
  display: grid;
  grid-template-columns: auto repeat(1, 50%);
  grid-column-gap: 40px;
  height: 400px;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 1;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%);
    width: 100%;
    height: 400px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
