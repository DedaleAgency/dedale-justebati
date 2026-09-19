import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F4F0E6',
          border: '4px solid #1A1714',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#1A1714',
            fontFamily: 'serif',
            letterSpacing: '-0.02em',
          }}
        >
          JB
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
