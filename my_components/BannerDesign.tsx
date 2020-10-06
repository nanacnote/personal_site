import { useScrollDirection } from '../my_hooks'

export const BannerDesign = (): JSX.Element => {
  const scrollDirection = useScrollDirection(50)

  return (
    <>
      <div className="scene stamp banner-design-background position-relative">
        <div className="ticket" data-content="admin"></div>
        <div className="ticket" data-content="api doc"></div>
        {/* underconstruction icon */}
        <div className="position-absolute" style={{ left: '100%' }}>
          <div className="h2 px-5">&#x1f6a7;</div>
          {scrollDirection.unit}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text');
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        .stamp {
          visibility: hidden;
        }

        .scene {
          display: -webkit-box;
          display: flex;
          flex-wrap: wrap;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          width: 100%;
          padding: 1rem;
          border-radius: 0.25rem;
          // background: yellow;
        }

        .scene .ticket {
          width: 200px;
          height: 50px;
          line-height: 100px;
          text-align: center;
          background: lightcoral;
          box-shadow: 0 25px 10px -20px rgba(0, 0, 0, 0.18);
          border-left: 2px dotted rgba(273, 216, 230, 0.5);
          position: relative;
          cursor: pointer;
        }
        .scene .ticket:nth-child(2n + 0) {
          background: #348fac;
        }
        .scene .ticket:last-of-type {
          border-right: 2px dotted rgba(273, 216, 230, 0.5);
        }
        .scene .ticket::before,
        .scene .ticket::after {
          content: '';
          position: absolute;
        }
        .scene .ticket::before {
          width: 10px;
          height: 10px;
          // background: yellow;
          border-radius: 50%;
          top: 10%;
          left: -3.05%;
          // box-shadow: 0px 30px 0 0 yellow, 200px 0px 0 0 yellow,
          //   200px 30px 0 0 yellow;
        }
        .scene .ticket::after {
          content: attr(data-content);
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          padding-top: 5px;
          padding-left: 5px;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 1em;
          color: rgba(255, 255, 255, 0.5);
        }

        @media only screen and (max-width: 454px) {
          .scene {
            background: transparent;
            margin: -5%;
          }
          .scene .ticket {
            border-right: 2px dotted rgba(273, 216, 230, 0.75);
          }
          .scene .ticket::before {
            background: transparent;
            box-shadow: 0px 30px 0 0 transparent, 200px 0px 0 0 transparent,
              200px 30px 0 0 transparent;
          }
        }
      `}</style>
    </>
  )
}

export default BannerDesign
