import styled from "styled-components"

export const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 100px 150px;
    background-color: var(--branco);

`
export const ItemImg = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    margin-left:-100px;

        img{
        width: 180px;
        margin-bottom:-50px;
        margin-top:-50px;
    }
    ul {
        li{
            margin: 12px 0px
        }
    }
    nav{
        display:flex;
        margin-top: 50px;
        li{
            span{
                margin-right:15px;

                 &.whatssapp {
                color: #008000;
                 }

                &.facebook {
                color: #3b5998;
                }

                &.instagram {
                color: #993399 ;
                }
                }
         }
        }

        p{
            text-align:center;
        }
`

export const Item = styled.div`

    h3 {
        margin-bottom: 15px;
    }
    ul {
        li{
            margin: 12px 0px
        }
    }
    nav{
        display:flex;
        margin-top: 50px;
        li{
            span{
                margin-right:15px;

                 &.whatssapp {
                color: #008000;
                 }

                &.facebook {
                color: #3b5998;
                }

                &.instagram {
                color: #993399 ;
                }
                }
         }
        }

        p{
            text-align:center;
            margin-left:-100px;
        }
`

export const Copy = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 15px 150px;
    border-top: 1px solid rgba(0,0,0,0.1);

    ul {
        display: flex;
        align-items: center;
        li{
            span {
                margin-left: 25px; 
            }
        }
    }
`
