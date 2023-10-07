export function getGlobalState() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';
  const collapsed = true;

  return {
    device,
    collapsed,
  } as const;
}
