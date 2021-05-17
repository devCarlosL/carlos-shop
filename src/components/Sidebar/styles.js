import styled from 'styled-components';

export const SidebarContainer = styled('main')`
  display: flex;
  background: #e6eaec;

  .sidebar {
    width: 240px;
    background: #0e2f44;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 30px;
      color: #ced5d9;
      height: 80px;

      h1 {
        margin: 0;
      }

      a {
        font-size: 1.5rem;
        color: #ced5d9;
      }
    }

    .sidebar__nav {
      li {
        font-size: 18px;
        margin: 16px 0;
        list-style: none;

        a {
          display: block;
          color: #ced5d9;

          border-radius: 3px;
          padding: 8px 16px;
          margin: 0 16px;
        }

        a:active {
          color: #ced5d9;
        }
      }
    }
  }
`;

export const ContentContainer = styled('div')`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;

  .sidebar__header {
    background: #fff;
    height: 5rem;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      position: relative;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      background: transparent;
      color: #264356;
      border-radius: 0.2rem;
      margin-right: 1.5rem;
      padding: 0.25rem 0.5rem;
    }

    .empty__cart {
      display: none;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-right: 0.1rem;

      font-size: 0.7rem;
      font-weight: bold;
      background: red;
      padding: 0.5rem;
      border-radius: 0.2rem;
      padding: 0.25rem 0.5rem;
    }
  }

  .content {
    background: #fff;
    margin: 1.5rem;
    padding: 1.5rem;

    height: 100vh;
    overflow: auto;
  }
`;
