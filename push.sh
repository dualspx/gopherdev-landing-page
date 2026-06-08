#!/bin/bash
# Build and push the pace-asia landing page image to GHCR
# Usage: ./push.sh [tag]
#   tag defaults to the current git tag (via `git describe`), e.g. v1.0.2
#   If no git tag exists, falls back to the short commit SHA, e.g. abc1234

set -e

GHCR_USER="${GHCR_USER:-dualspx}"
IMAGE_NAME="ghcr.io/${GHCR_USER}/gopherlogic"

# Derive tag from git: prefer an exact tag, fall back to short SHA
GIT_TAG="$(git describe --tags --exact-match 2>/dev/null || git rev-parse --short HEAD)"
TAG="${1:-$GIT_TAG}"

IMAGE="${IMAGE_NAME}:${TAG}"

echo "Git ref : ${GIT_TAG}"
echo "Building: ${IMAGE}"

docker build \
  --build-arg NEXT_PUBLIC_SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://gopherlogic.dev}" \
  -t "${IMAGE}" \
  -t "${IMAGE_NAME}:latest" \
  .

echo "Pushing : ${IMAGE}"
docker push "${IMAGE}"

echo "Pushing : ${IMAGE_NAME}:latest"
docker push "${IMAGE_NAME}:latest"

echo ""
echo "Done. To deploy on the production server:"
echo "  TAG=${TAG} docker compose pull gopherlogic && TAG=${TAG} docker compose up -d gopherlogic"
