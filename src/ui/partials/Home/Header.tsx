
export default function Header() {
    return (
        <div
        style={{
          display: 'flex',
          width: '1440px',
          height: '96px',
          padding: '24px 24px 24px 24px',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap',
          position: 'relative',
          zIndex: '124',
          margin: '0 0 0 0',
        }}
      >
        <div
          style={{
            width: '128px',
            height: '34.88px',
            flexShrink: '0',
            position: 'relative',
            zIndex: '125',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundPosition: 'center',
              backgroundImage:
                'url(/images/5e0005bd-df0d-4479-a2c7-e5bc4b6e3ad3.png)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              top: '0',
              left: '0',
              zIndex: '126',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            width: '377px',
            gap: '12px',
            alignItems: 'center',
            flexShrink: '0',
            flexWrap: 'nowrap',
            position: 'relative',
            zIndex: '127',
          }}
        >
          <div
            style={{
              display: 'flex',
              minWidth: '0',
              height: '48px',
              padding: '4px 4px 4px 4px',
              gap: '8px',
              alignItems: 'center',
              flexGrow: '1',
              flexShrink: '0',
              flexBasis: '0',
              flexWrap: 'nowrap',
              backgroundColor: '#191919',
              borderRadius: '99px',
              position: 'relative',
              overflow: 'hidden',
              zIndex: '128',
            }}
          >
            <input
              style={{
                width: '317px',
                height: '48px',
                flexShrink: '0',
                backgroundColor: 'transparent',
                border: 'none',
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: '133',
                outline: 'none',
              }}
            />
            <div
              style={{
                display: 'flex',
                width: '40px',
                minHeight: '0',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                flexShrink: '0',
                flexWrap: 'nowrap',
                backgroundColor: '#232323',
                borderRadius: '99px',
                position: 'relative',
                overflow: 'hidden',
                zIndex: '129',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  flexShrink: '0',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: '130',
                }}
              >
                <div
                  style={{
                    width: '17px',
                    height: '17px',
                    backgroundPosition: 'center',
                    backgroundImage:
                      'url(/images/b50cc231-b17f-4b0e-92da-fe30003296c6.png)',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    zIndex: '131',
                    margin: '1.5px 0 0 1.5px',
                  }}
                />
              </div>
            </div>
            <span
              style={{
                height: '19px',
                flexGrow: '1',
                flexShrink: '0',
                flexBasis: 'auto',
                fontFamily: 'Inter, var(--default-font-family)',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '19px',
                color: '#313131',
                position: 'relative',
                textAlign: 'left',
                whiteSpace: 'nowrap',
                zIndex: '132',
              }}
            >
              Pesquisar...
            </span>
          </div>
          <div
            style={{
              width: '48px',
              height: '48px',
              flexShrink: '0',
              position: 'relative',
              zIndex: '134',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '48px',
                height: '48px',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'nowrap',
                backgroundColor: '#191919',
                borderRadius: '99px',
                position: 'absolute',
                top: '0',
                left: '0',
                overflow: 'hidden',
                zIndex: '135',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  flexShrink: '0',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: '136',
                }}
              >
                <div
                  style={{
                    width: '17px',
                    height: '18.667px',
                    backgroundPosition: 'center',
                    backgroundImage:
                      'url(/images/0da65ac5-53bb-4b22-a39f-7ad88f2bfdd4.png)',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    zIndex: '137',
                    margin: '0.67px 0 0 1.5px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          style={{
            display: 'flex',
            width: '128px',
            height: '40px',
            padding: '55px 12px 55px 12px',
            gap: '8px',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: '0',
            flexWrap: 'nowrap',
            backgroundColor: '#232323',
            borderRadius: '12px',
            border: 'none',
            position: 'relative',
            overflow: 'hidden',
            zIndex: '138',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              height: '19px',
              flexShrink: '0',
              flexBasis: 'auto',
              fontFamily: 'Inter, var(--default-font-family)',
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: '19px',
              color: '#eeeeee',
              position: 'relative',
              textAlign: 'left',
              whiteSpace: 'nowrap',
              zIndex: '139',
            }}
          >
            Login
          </span>
        </button>
      </div>
    )
}
