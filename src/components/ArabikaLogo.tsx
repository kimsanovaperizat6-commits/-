import React from 'react';

interface ArabikaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
}

export const ArabikaLogo: React.FC<ArabikaLogoProps> = ({
  size = 'md',
  className = '',
  showSubtitle = false,
}) => {
  const sizeMap = {
    sm: { circle: 56, viewBox: 260 },
    md: { circle: 88, viewBox: 260 },
    lg: { circle: 128, viewBox: 260 },
    xl: { circle: 168, viewBox: 260 },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      {/* 
        Original Arabika Logo:
        - Circular yellow emblem: #FDD000 / #FFDE00
        - Top text: "БИЙ СТУДИЯСЫ"
        - Center signature calligraphy: "Арабика"
        - Bottom text: "СТУДИЯ ТАНЦА"
      */}
      <div
        className="relative rounded-full shadow-md transition-transform duration-300 hover:scale-[1.03]"
        style={{
          width: current.circle,
          height: current.circle,
        }}
      >
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full rounded-full select-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Логотип студии Арабика"
        >
          {/* Saturated Sunny Yellow Background */}
          <circle cx="150" cy="150" r="150" fill="#FFDE00" />

          {/* Top Inscription: БИЙ СТУДИЯСЫ */}
          <text
            x="150"
            y="66"
            textAnchor="middle"
            fill="#111111"
            fontFamily="'Manrope', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="0.08em"
          >
            БИЙ СТУДИЯСЫ
          </text>

          {/* Center Calligraphic Logotype: Арабика */}
          <g transform="translate(36, 92)" fill="#111111">
            {/* 
              Handcrafted vector path precisely matching the Arabic-script influenced 
              calligraphic curves of the original "Арабика" wordmark
            */}
            <path
              d="M 28 54 
                 C 25 32, 38 14, 52 14 
                 C 63 14, 70 24, 66 38 
                 C 62 50, 48 58, 38 56 
                 C 32 55, 30 50, 32 44 
                 C 34 38, 42 34, 48 36 
                 C 49 38, 48 42, 45 42 
                 C 43 42, 40 40, 39 42 
                 C 38 45, 42 47, 46 47 
                 C 53 47, 57 38, 56 28 
                 C 55 22, 50 18, 44 19 
                 C 34 21, 26 34, 25 50 
                 C 24 64, 21 82, 17 98 
                 C 15 106, 12 110, 8 108 
                 C 5 107, 4 102, 6 95 
                 C 10 78, 14 62, 16 48 
                 C 14 48, 10 52, 7 56 
                 C 5 58, 2 56, 3 53 
                 C 6 46, 14 36, 22 28 
                 C 25 24, 28 26, 27 32 
                 Z"
            />
            {/* The sweeping cross flourish of 'А' connecting to 'р' */}
            <path
              d="M 20 72 
                 C 28 66, 38 60, 47 62 
                 C 52 63, 53 68, 48 74 
                 C 42 81, 33 86, 26 84 
                 C 22 83, 20 78, 20 72 
                 Z"
            />
            {/* Letter 'р' with deep graceful descender */}
            <path
              d="M 44 65 
                 C 50 63, 56 61, 62 61 
                 C 72 61, 78 68, 74 77 
                 C 70 85, 61 88, 54 87 
                 C 50 86, 49 84, 49 82 
                 L 41 106 
                 C 39 111, 36 112, 34 109 
                 C 33 106, 34 102, 36 94 
                 L 44 65 
                 Z 
                 M 51 70 
                 C 50 75, 54 80, 59 79 
                 C 63 79, 66 75, 67 71 
                 C 68 67, 65 65, 60 65 
                 C 56 65, 52 67, 51 70 
                 Z"
            />
            {/* Letter 'а' */}
            <path
              d="M 75 74 
                 C 78 66, 85 62, 92 62 
                 C 98 62, 103 66, 102 73 
                 C 101 81, 95 87, 86 87 
                 C 80 87, 75 83, 75 74 
                 Z 
                 M 84 67 
                 C 81 67, 79 70, 79 75 
                 C 79 80, 83 82, 87 81 
                 C 91 81, 94 77, 95 72 
                 C 95 68, 92 67, 88 67 
                 Z"
            />
            {/* Letter 'б' with tall curving ascender hook */}
            <path
              d="M 103 82 
                 C 106 72, 112 63, 120 63 
                 C 127 63, 131 68, 129 76 
                 C 127 84, 119 88, 112 87 
                 L 118 64 
                 C 122 47, 128 32, 137 22 
                 C 143 15, 151 14, 154 18 
                 C 155 20, 152 23, 147 24 
                 C 139 26, 134 35, 128 50 
                 L 124 62 
                 C 127 61, 130 62, 131 65 
                 C 132 72, 126 84, 117 87 
                 C 109 89, 103 86, 103 82 
                 Z"
            />
            {/* Letter 'и' */}
            <path
              d="M 134 84 
                 C 137 76, 142 66, 147 64 
                 C 149 63, 151 65, 150 68 
                 C 148 74, 145 81, 144 85 
                 C 146 85, 150 82, 153 77 
                 C 156 72, 160 65, 163 65 
                 C 165 65, 166 67, 164 71 
                 C 161 78, 158 84, 156 87 
                 C 152 89, 146 89, 142 87 
                 C 138 88, 135 87, 134 84 
                 Z"
            />
            {/* Letter 'к' with sharp calligraphy cuts & diacritic dots */}
            <path
              d="M 166 85 
                 C 169 77, 174 65, 178 64 
                 C 180 64, 181 66, 179 70 
                 L 175 80 
                 C 180 75, 186 68, 191 66 
                 C 193 65, 194 67, 192 70 
                 C 188 74, 182 80, 178 84 
                 C 183 85, 189 87, 193 88 
                 C 195 89, 194 91, 191 91 
                 C 186 91, 180 88, 175 86 
                 L 173 90 
                 C 171 92, 169 91, 168 89 
                 Z"
            />
            {/* Diacritic dots near 'к' */}
            <circle cx="184" cy="56" r="3.2" />
            <circle cx="196" cy="58" r="2.8" />

            {/* Letter 'а' terminating with an upward wave */}
            <path
              d="M 197 81 
                 C 200 73, 206 67, 213 67 
                 C 219 67, 223 71, 222 78 
                 C 221 84, 215 88, 208 88 
                 C 202 88, 198 85, 197 81 
                 Z 
                 M 205 73 
                 C 203 74, 201 77, 201 81 
                 C 202 83, 205 84, 208 83 
                 C 212 82, 215 78, 215 74 
                 C 215 72, 212 71, 209 71 
                 C 207 71, 206 72, 205 73 
                 Z"
            />
            <path
              d="M 218 80 
                 C 223 78, 227 75, 230 73 
                 C 232 72, 234 74, 232 76 
                 C 229 80, 224 84, 218 86 
                 Z"
            />
          </g>

          {/* Bottom Inscription: СТУДИЯ ТАНЦА */}
          <text
            x="150"
            y="244"
            textAnchor="middle"
            fill="#111111"
            fontFamily="'Manrope', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="800"
            fontSize="17"
            letterSpacing="0.08em"
          >
            СТУДИЯ ТАНЦА
          </text>
        </svg>
      </div>

      {showSubtitle && (
        <div className="mt-2 text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-neutral-600">
            Оздоровление & Реабилитация
          </p>
        </div>
      )}
    </div>
  );
};
