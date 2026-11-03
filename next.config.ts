import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { NextConfig } from 'next';

// Give changed CV content a new URL so browsers cannot reuse a stale PDF.
function generateVersionedCvUrl(): string {
  const filesDirectory = join(process.cwd(), 'public', 'files');
  const sourceFilename = 'Oleksandr_Burlachenko_CV.pdf';
  const cvContents = readFileSync(join(filesDirectory, sourceFilename));
  const contentHash = createHash('sha256')
    .update(cvContents)
    .digest('hex')
    .slice(0, 12);
  const versionedFilename = `Oleksandr_Burlachenko_CV.${contentHash}.pdf`;
  const generatedCvPattern =
    /^Oleksandr_Burlachenko_CV\.(?:[a-f0-9]{12}|[a-f0-9]{64})\.pdf$/;

  for (const filename of readdirSync(filesDirectory)) {
    const isOutdatedGeneratedCv =
      generatedCvPattern.test(filename) && filename !== versionedFilename;

    if (isOutdatedGeneratedCv) {
      unlinkSync(join(filesDirectory, filename));
    }
  }

  writeFileSync(join(filesDirectory, versionedFilename), cvContents);

  return `/files/${versionedFilename}`;
}

const nextConfig: NextConfig = {
  output: 'export',
  env: {
    NEXT_PUBLIC_CV_URL: generateVersionedCvUrl(),
  },
  sassOptions: {
    outputStyle: 'expanded', // Prevents minification in development mode
  },
  reactStrictMode: true,
};

export default nextConfig;
