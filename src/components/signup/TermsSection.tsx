import React from 'react';

interface Term {
  code: string;
  termName: string;
  shortCont: string;
  longCont: string;
  chkTerm: boolean;
  agreed: boolean;
  valid: boolean;
  termCode: string;
}

interface Props {
  terms: Term[];
  error?: string;
  onChange: (termCode: string, checked: boolean) => void;
}

const TermsSection: React.FC<Props> = ({ terms, error, onChange }) => {
  return (
    <div>
      <h3>약관 동의</h3>
      {terms.map((term) => (
        <div key={term.code} className="mb-[30px]">
          <h4>
            <span className='font-bold text-green-600'>{term.chkTerm ? '[필수]' : '[선택]'} </span>
            {term.termName} 
          </h4>
          <p>{term.shortCont}</p>
          <p className='text-gray-400'>{term.longCont}</p>
          <input
            type="checkbox"
            id={term.termCode}
            checked={term.agreed}
            onChange={(e) => onChange(term.termCode, e.target.checked)}
          />
          <label>동의합니다.</label>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      ))}
    </div>
  );
};

export default TermsSection;