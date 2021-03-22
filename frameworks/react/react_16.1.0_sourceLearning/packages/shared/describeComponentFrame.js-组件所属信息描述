

export default function(
  name: null | string,
  source: any,
  ownerName: null | string,
) {
  return (
    '\n    in ' +
    (name || 'Unknown') +
    (source
      ? ' (at ' +
        source.fileName.replace(/^.*[\\\/]/, '') +
        ':' +
        source.lineNumber +
        ')'
      : ownerName ? ' (created by ' + ownerName + ')' : '')
  );
}
