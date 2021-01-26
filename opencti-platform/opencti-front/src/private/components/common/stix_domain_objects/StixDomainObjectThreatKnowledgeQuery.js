import graphql from 'babel-plugin-relay/macro';

// eslint-disable-next-line import/prefer-default-export
export const stixDomainObjectThreatKnowledgeStixCoreRelationshipsQuery = graphql`
  query StixDomainObjectThreatKnowledgeQueryStixCoreRelationshipsQuery(
    $fromId: String
    $fromRole: String
    $toTypes: [String]
    $relationship_type: String
    $first: Int
  ) {
    ...StixDomainObjectGlobalKillChain_data
    ...StixDomainObjectTimeline_data
  }
`;
