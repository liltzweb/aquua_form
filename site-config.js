window.FORM_CONFIG = {
  product: {
    code: 'aquua',
    name: 'aquua',
    badge: 'interactive ocean aquarium pass',
    price: 10000,
    priceFormatted: 'Rp 10.000',
    tagline: 'interactive ocean pass with identity card, memory tank, photo reef, fish mail secrets, promises, and love letter.'
  },
  context: {
    formCode: 'AQUUA-ORD',
    edition: '2026 Ocean Pass Edition',
    description: 'Aquua is an interactive deep-ocean aquarium pass featuring a personalized pass ticket, identity card profile, entry note, 10 adore badges, 3 core memory tanks, 4 polaroid photo reef snapshots, 8 reason notes, 5 secret interactive swimming fish mail messages, a hidden heartfelt letter, 4 promise bubbles, and closing final stamp with background ocean audio.'
  },
  motif: '🌊',
  mediaDescription: '4 Foto (Photo Reef) + 1 File Musik MP3',
  theme: {
    name: 'aquua',
    palette: ['#0E1726', '#1A2942', '#7DE7EB', '#F2F8FA', '#4A607A', '#38B2AC']
  },
  sections: [
    {
      id: 'pass_details',
      number: '02',
      title: 'Pass Details & Cover Pass',
      description: 'Main aquarium boarding pass ticket displayed on top of the ocean archive.',
      fields: [
        {
          id: 'pass_number',
          label: 'Pass Number / Subtitle',
          type: 'text',
          placeholder: 'e.g. no. 05',
          defaultValue: 'no. 05',
          required: true,
          helpText: 'The pass issue number shown at top right.'
        },
        {
          id: 'pass_header_label',
          label: 'Header Eyebrow',
          type: 'text',
          placeholder: 'e.g. our lil ocean',
          defaultValue: 'our lil ocean',
          required: true,
          helpText: 'Top eyebrow header on the ticket.'
        },
        {
          id: 'pass_recipient_headline',
          label: 'Recipient Name (Main Pass Title)',
          type: 'text',
          placeholder: 'e.g. naomi hayes',
          defaultValue: 'naomi hayes',
          required: true,
          helpText: 'Primary large heading displayed on the ticket.'
        },
        {
          id: 'pass_dedication',
          label: 'Dedication Note / Subtitle',
          type: 'textarea',
          placeholder: 'e.g. for my prettiest girl, whipped up this lil ocean just for u.',
          defaultValue: 'for my prettiest girl, whipped up this lil ocean just for u.',
          required: true,
          helpText: 'Short dedication quote beneath the main title.'
        },
        {
          id: 'pass_to',
          label: 'Pass To',
          type: 'text',
          placeholder: 'e.g. naomi hayes',
          defaultValue: 'naomi hayes',
          required: true,
          helpText: 'Recipient name in the pass table.'
        },
        {
          id: 'pass_from',
          label: 'Pass From',
          type: 'text',
          placeholder: 'e.g. kai bennet',
          defaultValue: 'kai bennet',
          required: true,
          helpText: 'Sender name in the pass table.'
        },
        {
          id: 'pass_event',
          label: 'Occasion / Pass Type',
          type: 'text',
          placeholder: 'e.g. 5th mensiversary / birthday / special day',
          defaultValue: '5th mensiversary',
          required: true,
          helpText: 'Occasion or pass type line.'
        },
        {
          id: 'pass_date',
          label: 'Pass Date',
          type: 'text',
          placeholder: 'e.g. jan 3, 2026',
          defaultValue: 'jan 3, 2026',
          required: true,
          helpText: 'Date printed on the boarding pass.'
        },
        {
          id: 'pass_status',
          label: 'Pass Status',
          type: 'text',
          placeholder: 'e.g. down bad 4 u / deeply in love',
          defaultValue: 'down bad 4 u',
          required: true,
          helpText: 'Status line shown on ticket.'
        },
        {
          id: 'pass_button_text',
          label: 'Action Button Label',
          type: 'text',
          placeholder: 'e.g. dive in!',
          defaultValue: 'dive in!',
          required: true,
          helpText: 'Button to dive into the ocean archive.'
        }
      ]
    },
    {
      id: 'identity_card',
      number: '03',
      title: 'Identity Card Profile',
      description: 'Second layer identity card profile and monogram mark.',
      fields: [
        {
          id: 'id_intro',
          label: 'Identity Card Intro',
          type: 'text',
          placeholder: 'e.g. a cute lil profile i put together for our 5th month.',
          defaultValue: 'a cute lil profile i put together for our 5th month.',
          required: true,
          helpText: 'Intro text under Identity Card header.'
        },
        {
          id: 'id_monogram',
          label: 'Profile Initial / Monogram Mark',
          type: 'text',
          placeholder: 'e.g. n',
          defaultValue: 'n',
          required: true,
          helpText: 'Single letter monogram in the profile circle.'
        },
        {
          id: 'id_name',
          label: 'Identity Name',
          type: 'text',
          placeholder: 'e.g. naomi hayes',
          defaultValue: 'naomi hayes',
          required: true,
          helpText: 'Name field in profile table.'
        },
        {
          id: 'id_from',
          label: 'Identity From',
          type: 'text',
          placeholder: 'e.g. kai bennet',
          defaultValue: 'kai bennet',
          required: true,
          helpText: 'Sender field in profile table.'
        },
        {
          id: 'id_occasion',
          label: 'Identity Occasion / Mensiversary',
          type: 'text',
          placeholder: 'e.g. 5th',
          defaultValue: '5th',
          required: true,
          helpText: 'Milestone line in profile table.'
        },
        {
          id: 'id_place',
          label: 'Identity Place',
          type: 'text',
          placeholder: 'e.g. our lil ocean',
          defaultValue: 'our lil ocean',
          required: true,
          helpText: 'Place description in profile table.'
        },
        {
          id: 'id_ticket_type',
          label: 'Identity Ticket Type',
          type: 'text',
          placeholder: 'e.g. lifetime access',
          defaultValue: 'lifetime access',
          required: true,
          helpText: 'Access type line.'
        },
        {
          id: 'id_soft_note',
          label: 'Soft Profile Note',
          type: 'textarea',
          placeholder: 'e.g. 5 months in and i'm still lowkey obsessed with u every single day.',
          defaultValue: '5 months in and i'm still lowkey obsessed with u every single day.',
          required: true,
          helpText: 'Footer note inside the identity card.'
        }
      ]
    },
    {
      id: 'before_enter',
      number: '04',
      title: 'Before Enter Notice',
      description: 'Notice card displayed before exploring the underwater sections.',
      fields: [
        {
          id: 'before_eyebrow',
          label: 'Notice Eyebrow',
          type: 'text',
          placeholder: 'e.g. heads up before u enter',
          defaultValue: 'heads up before u enter',
          required: true,
          helpText: 'Top tag for the notice card.'
        },
        {
          id: 'before_text',
          label: 'Notice Text',
          type: 'textarea',
          placeholder: 'e.g. this is just a cute lil space packed with our memories, late night vibes, and everything i adore about u.',
          defaultValue: 'this is just a cute lil space packed with our memories, late night vibes, and everything i adore about u.',
          required: true,
          helpText: 'Full message text of the notice card.'
        }
      ]
    },
    {
      id: 'tiny_details',
      number: '05',
      title: 'Tiny Details (10 Adore Badges)',
      description: 'Floating badge chips representing cute compliments and quirks.',
      fields: [
        {
          id: 'adore_subtitle',
          label: 'Section Eyebrow',
          type: 'text',
          placeholder: 'e.g. things i adore',
          defaultValue: 'things i adore',
          required: true
        },
        {
          id: 'adore_heading',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. about naomi',
          defaultValue: 'about naomi',
          required: true
        },
        {
          id: 'adore_description',
          label: 'Section Description',
          type: 'text',
          placeholder: 'e.g. lil words that pop into my head when i look at u.',
          defaultValue: 'lil words that pop into my head when i look at u.',
          required: true
        },
        {
          id: 'adore_badge_1',
          label: 'Badge 01',
          type: 'text',
          placeholder: 'e.g. gorgeous fr',
          defaultValue: 'gorgeous fr',
          required: true
        },
        {
          id: 'adore_badge_2',
          label: 'Badge 02',
          type: 'text',
          placeholder: 'e.g. my safe space',
          defaultValue: 'my safe space',
          required: true
        },
        {
          id: 'adore_badge_3',
          label: 'Badge 03',
          type: 'text',
          placeholder: 'e.g. cutest laugh',
          defaultValue: 'cutest laugh',
          required: true
        },
        {
          id: 'adore_badge_4',
          label: 'Badge 04',
          type: 'text',
          placeholder: 'e.g. certified yapper',
          defaultValue: 'certified yapper',
          required: true
        },
        {
          id: 'adore_badge_5',
          label: 'Badge 05',
          type: 'text',
          placeholder: 'e.g. sweetest soul',
          defaultValue: 'sweetest soul',
          required: true
        },
        {
          id: 'adore_badge_6',
          label: 'Badge 06',
          type: 'text',
          placeholder: 'e.g. lowkey silly',
          defaultValue: 'lowkey silly',
          required: true
        },
        {
          id: 'adore_badge_7',
          label: 'Badge 07',
          type: 'text',
          placeholder: 'e.g. my comfort person',
          defaultValue: 'my comfort person',
          required: true
        },
        {
          id: 'adore_badge_8',
          label: 'Badge 08',
          type: 'text',
          placeholder: 'e.g. 10/10 pretty',
          defaultValue: '10/10 pretty',
          required: true
        },
        {
          id: 'adore_badge_9',
          label: 'Badge 09',
          type: 'text',
          placeholder: 'e.g. ride or die',
          defaultValue: 'ride or die',
          required: true
        },
        {
          id: 'adore_badge_10',
          label: 'Badge 10',
          type: 'text',
          placeholder: 'e.g. my whole world',
          defaultValue: 'my whole world',
          required: true
        }
      ]
    },
    {
      id: 'memory_tank',
      number: '06',
      title: 'Memory Tank (3 Core Memories)',
      description: 'Interactive memory cards capturing unforgettable moments together.',
      fields: [
        {
          id: 'memory_subtitle',
          label: 'Section Eyebrow',
          type: 'text',
          placeholder: 'e.g. memory tank',
          defaultValue: 'memory tank',
          required: true
        },
        {
          id: 'memory_heading',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. core memories',
          defaultValue: 'core memories',
          required: true
        },
        {
          id: 'memory_intro',
          label: 'Section Description',
          type: 'text',
          placeholder: 'e.g. random lil moments with u that i replay in my head rent free.',
          defaultValue: 'random lil moments with u that i replay in my head rent free.',
          required: true
        },
        {
          id: 'mem1_title',
          label: 'Memory 01 Title',
          type: 'text',
          placeholder: 'e.g. our 3am yapping sessions',
          defaultValue: 'our 3am yapping sessions',
          required: true
        },
        {
          id: 'mem1_text',
          label: 'Memory 01 Story',
          type: 'textarea',
          placeholder: 'e.g. talking about the most random stuff until our eyes give up, but never getting bored of u.',
          defaultValue: 'talking about the most random stuff until our eyes give up, but never getting bored of u.',
          required: true
        },
        {
          id: 'mem2_title',
          label: 'Memory 02 Title',
          type: 'text',
          placeholder: 'e.g. that cute lil smile',
          defaultValue: 'that cute lil smile',
          required: true
        },
        {
          id: 'mem2_text',
          label: 'Memory 02 Story',
          type: 'textarea',
          placeholder: 'e.g. the way u smile at me literally melts whatever bad day i'm having, no cap.',
          defaultValue: 'the way u smile at me literally melts whatever bad day i'm having, no cap.',
          required: true
        },
        {
          id: 'mem3_title',
          label: 'Memory 03 Title',
          type: 'text',
          placeholder: 'e.g. just chilling with u',
          defaultValue: 'just chilling with u',
          required: true
        },
        {
          id: 'mem3_text',
          label: 'Memory 03 Story',
          type: 'textarea',
          placeholder: 'e.g. literally doing nothing with u feels 1000x better than doing anything else with anyone.',
          defaultValue: 'literally doing nothing with u feels 1000x better than doing anything else with anyone.',
          required: true
        }
      ]
    },
    {
      id: 'photo_reef',
      number: '07',
      title: 'Photo Reef (4 Polaroids)',
      description: 'Polaroid gallery strip with interactive modal previews (send 4 photos via drive/telegram).',
      fields: [
        {
          id: 'photo_subtitle',
          label: 'Section Eyebrow',
          type: 'text',
          placeholder: 'e.g. photo reef',
          defaultValue: 'photo reef',
          required: true
        },
        {
          id: 'photo_heading',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. little snapshots',
          defaultValue: 'little snapshots',
          required: true
        },
        {
          id: 'photo_intro',
          label: 'Section Description',
          type: 'text',
          placeholder: 'e.g. small scenes of us that i'm keeping forever.',
          defaultValue: 'small scenes of us that i'm keeping forever.',
          required: true
        },
        {
          id: 'photo1_caption',
          label: 'Photo 01 Caption',
          type: 'text',
          placeholder: 'e.g. sun kissed cutie',
          defaultValue: 'sun kissed cutie',
          required: true,
          helpText: 'Caption for the 1st polaroid photo.'
        },
        {
          id: 'photo2_caption',
          label: 'Photo 02 Caption',
          type: 'text',
          placeholder: 'e.g. late night strolls',
          defaultValue: 'late night strolls',
          required: true,
          helpText: 'Caption for the 2nd polaroid photo.'
        },
        {
          id: 'photo3_caption',
          label: 'Photo 03 Caption',
          type: 'text',
          placeholder: 'e.g. effortlessly pretty',
          defaultValue: 'effortlessly pretty',
          required: true,
          helpText: 'Caption for the 3rd polaroid photo.'
        },
        {
          id: 'photo4_caption',
          label: 'Photo 04 Caption',
          type: 'text',
          placeholder: 'e.g. smiling bc of u',
          defaultValue: 'smiling bc of u',
          required: true,
          helpText: 'Caption for the 4th polaroid photo.'
        }
      ]
    },
    {
      id: 'little_things',
      number: '08',
      title: 'Little Things (8 Quiet Reasons)',
      description: 'Floating ocean reasons describing why they are your favorite person.',
      fields: [
        {
          id: 'reasons_subtitle',
          label: 'Section Eyebrow',
          type: 'text',
          placeholder: 'e.g. quiet reasons',
          defaultValue: 'quiet reasons',
          required: true
        },
        {
          id: 'reasons_heading',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. why i love u',
          defaultValue: 'why i love u',
          required: true
        },
        {
          id: 'reasons_intro',
          label: 'Section Description',
          type: 'text',
          placeholder: 'e.g. just some honest reasons why you're my favorite person ever.',
          defaultValue: 'just some honest reasons why you're my favorite person ever.',
          required: true
        },
        {
          id: 'reason_1',
          label: 'Reason 01',
          type: 'text',
          placeholder: 'e.g. how gentle u are with me',
          defaultValue: 'how gentle u are with me',
          required: true
        },
        {
          id: 'reason_2',
          label: 'Reason 02',
          type: 'text',
          placeholder: 'e.g. the way u care so quietly',
          defaultValue: 'the way u care so quietly',
          required: true
        },
        {
          id: 'reason_3',
          label: 'Reason 03',
          type: 'text',
          placeholder: 'e.g. how u make everything lighter',
          defaultValue: 'how u make everything lighter',
          required: true
        },
        {
          id: 'reason_4',
          label: 'Reason 04',
          type: 'text',
          placeholder: 'e.g. ur goofy lil giggle',
          defaultValue: 'ur goofy lil giggle',
          required: true
        },
        {
          id: 'reason_5',
          label: 'Reason 05',
          type: 'text',
          placeholder: 'e.g. how safe i feel around u',
          defaultValue: 'how safe i feel around u',
          required: true
        },
        {
          id: 'reason_6',
          label: 'Reason 06',
          type: 'text',
          placeholder: 'e.g. how u just get me fr',
          defaultValue: 'how u just get me fr',
          required: true
        },
        {
          id: 'reason_7',
          label: 'Reason 07',
          type: 'text',
          placeholder: 'e.g. making love feel so easy',
          defaultValue: 'making love feel so easy',
          required: true
        },
        {
          id: 'reason_8',
          label: 'Reason 08',
          type: 'text',
          placeholder: 'e.g. simply cuz you're u',
          defaultValue: 'simply cuz you're u',
          required: true
        }
      ]
    },
    {
      id: 'fish_mail',
      number: '09',
      title: 'Fish Mail (5 Secret Messages)',
      description: 'Interactive swimming fish that reveal popup letters when clicked.',
      fields: [
        {
          id: 'fish_subtitle',
          label: 'Section Eyebrow',
          type: 'text',
          placeholder: 'e.g. fish mail',
          defaultValue: 'fish mail',
          required: true
        },
        {
          id: 'fish_heading',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. notes from kai',
          defaultValue: 'notes from kai',
          required: true
        },
        {
          id: 'fish_intro',
          label: 'Section Description',
          type: 'text',
          placeholder: 'e.g. tap a lil fish to see some soft thoughts i saved for u.',
          defaultValue: 'tap a lil fish to see some soft thoughts i saved for u.',
          required: true
        },
        {
          id: 'fish_msg_1',
          label: 'Fish Mail 01 Message',
          type: 'textarea',
          placeholder: 'e.g. u always bring so much peace into my life, even when everything else is loud.',
          defaultValue: 'u always bring so much peace into my life, even when everything else is loud.',
          required: true
        },
        {
          id: 'fish_msg_2',
          label: 'Fish Mail 02 Message',
          type: 'textarea',
          placeholder: 'e.g. i love how effortlessly u make me smile. literally just being around u makes my day.',
          defaultValue: 'i love how effortlessly u make me smile. literally just being around u makes my day.',
          required: true
        },
        {
          id: 'fish_msg_3',
          label: 'Fish Mail 03 Message',
          type: 'textarea',
          placeholder: 'e.g. thank u for listening to me yap about anything and everything.',
          defaultValue: 'thank u for listening to me yap about anything and everything.',
          required: true
        },
        {
          id: 'fish_msg_4',
          label: 'Fish Mail 04 Message',
          type: 'textarea',
          placeholder: 'e.g. my favorite part of any day is always whenever i get to talk to u.',
          defaultValue: 'my favorite part of any day is always whenever i get to talk to u.',
          required: true
        },
        {
          id: 'fish_msg_5',
          label: 'Fish Mail 05 Message',
          type: 'textarea',
          placeholder: 'e.g. never forget how deeply loved, appreciated, and cherished u are by me.',
          defaultValue: 'never forget how deeply loved, appreciated, and cherished u are by me.',
          required: true
        }
      ]
    },
    {
      id: 'tiny_letter',
      number: '10',
      title: 'Tiny Letter (Hidden Ocean Love Note)',
      description: 'Hidden love note revealed upon clicking Open Letter.',
      fields: [
        {
          id: 'letter_eyebrow',
          label: 'Letter Eyebrow',
          type: 'text',
          placeholder: 'e.g. a tiny letter',
          defaultValue: 'a tiny letter',
          required: true
        },
        {
          id: 'letter_intro',
          label: 'Letter Intro',
          type: 'text',
          placeholder: 'e.g. a short love note from kai, hidden inside the pass.',
          defaultValue: 'a short love note from kai, hidden inside the pass.',
          required: true
        },
        {
          id: 'letter_full_text',
          label: 'Full Love Letter Content',
          type: 'textarea',
          placeholder: 'e.g. happy 5th mensiversary, naomi hayes! jan 3rd, 2026 was definitely one of the best days ever...',
          defaultValue: 'happy 5th mensiversary, naomi hayes! jan 3rd, 2026 was definitely one of the best days ever. these 5 months with u have been nothing but warmth, laughs, and pure happiness. thank u for sticking with me through every lil wave, being my absolute favorite person, and dealing with my goofy self. wouldn't trade this for anything in the world. ily endlessly, my prettiest girl.',
          required: true,
          helpText: 'The full love letter revealed when recipient clicks open letter.'
        }
      ]
    },
    {
      id: 'promise_bubbles',
      number: '11',
      title: 'Promise Bubbles (4 Soft Promises)',
      description: 'Underwater promise grid moving forward.',
      fields: [
        {
          id: 'promises_subtitle',
          label: 'Section Eyebrow',
          type: 'text',
          placeholder: 'e.g. promise bubbles',
          defaultValue: 'promise bubbles',
          required: true
        },
        {
          id: 'promises_heading',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. soft promises',
          defaultValue: 'soft promises',
          required: true
        },
        {
          id: 'promises_intro',
          label: 'Section Description',
          type: 'text',
          placeholder: 'e.g. some real promises for us moving forward.',
          defaultValue: 'some real promises for us moving forward.',
          required: true
        },
        {
          id: 'promise_1',
          label: 'Promise 01',
          type: 'textarea',
          placeholder: 'e.g. i'll keep choosing u, every single day no matter what.',
          defaultValue: 'i'll keep choosing u, every single day no matter what.',
          required: true
        },
        {
          id: 'promise_2',
          label: 'Promise 02',
          type: 'textarea',
          placeholder: 'e.g. always got ur back whenever things get too overwhelming.',
          defaultValue: 'always got ur back whenever things get too overwhelming.',
          required: true
        },
        {
          id: 'promise_3',
          label: 'Promise 03',
          type: 'textarea',
          placeholder: 'e.g. i'll keep treating u gently and keeping our love soft.',
          defaultValue: 'i'll keep treating u gently and keeping our love soft.',
          required: true
        },
        {
          id: 'promise_4',
          label: 'Promise 04',
          type: 'textarea',
          placeholder: 'e.g. holding ur hand through whatever comes next.',
          defaultValue: 'holding ur hand through whatever comes next.',
          required: true
        }
      ]
    },
    {
      id: 'final_stamp',
      number: '12',
      title: 'Final Stamp & Closing Seal',
      description: 'Closing seal and bottom replay button section.',
      fields: [
        {
          id: 'final_eyebrow',
          label: 'Final Section Eyebrow',
          type: 'text',
          placeholder: 'e.g. final stamp',
          defaultValue: 'final stamp',
          required: true
        },
        {
          id: 'final_intro',
          label: 'Final Intro',
          type: 'text',
          placeholder: 'e.g. the end of this lil ocean pass, but not the end of us.',
          defaultValue: 'the end of this lil ocean pass, but not the end of us.',
          required: true
        },
        {
          id: 'final_stamp_badge',
          label: 'Stamp Badge Date / Text',
          type: 'text',
          placeholder: 'e.g. 5th mensiversary • 01.03.26',
          defaultValue: '5th mensiversary • 01.03.26',
          required: true
        },
        {
          id: 'final_heading',
          label: 'Final Heading',
          type: 'text',
          placeholder: 'e.g. from kai, for naomi hayes',
          defaultValue: 'from kai, for naomi hayes',
          required: true
        },
        {
          id: 'final_closing_tag',
          label: 'Closing Tagline / Quote',
          type: 'text',
          placeholder: 'e.g. i'd swim across the whole ocean just for u',
          defaultValue: 'i'd swim across the whole ocean just for u',
          required: true
        }
      ]
    }
  ]
};
