--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: jewelery; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE jewelery WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE jewelery OWNER TO postgres;

\connect jewelery

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: clarity_clarity_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.clarity_clarity_enum AS ENUM (
    'LC',
    'FL',
    'IF',
    'VVS1',
    'VVS2',
    'VS1',
    'VS2',
    'SI1',
    'SI2',
    'P1',
    'P2',
    'P3'
);


ALTER TYPE public.clarity_clarity_enum OWNER TO postgres;

--
-- Name: cut_cut_type_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.cut_cut_type_enum AS ENUM (
    'Prefect',
    'Excellent',
    'Good',
    'Satisfactory',
    'Low Quality'
);


ALTER TYPE public.cut_cut_type_enum OWNER TO postgres;

--
-- Name: diamonds_color_type_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.diamonds_color_type_enum AS ENUM (
    'D',
    'E',
    'F',
    'G',
    'H',
    'I-J',
    'KM',
    'NR',
    'SZ'
);


ALTER TYPE public.diamonds_color_type_enum OWNER TO postgres;

--
-- Name: diamonds_cut_type_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.diamonds_cut_type_enum AS ENUM (
    'Prefect',
    'Excellent',
    'Good',
    'Satisfactory',
    'Low Quality'
);


ALTER TYPE public.diamonds_cut_type_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: carat_weight; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carat_weight (
    id integer NOT NULL,
    weight numeric DEFAULT '0'::numeric NOT NULL,
    "priceId" integer
);


ALTER TABLE public.carat_weight OWNER TO postgres;

--
-- Name: carat_weight_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carat_weight_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carat_weight_id_seq OWNER TO postgres;

--
-- Name: carat_weight_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carat_weight_id_seq OWNED BY public.carat_weight.id;


--
-- Name: clarity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clarity (
    id integer NOT NULL,
    clarity character varying(6) NOT NULL,
    "priceId" integer
);


ALTER TABLE public.clarity OWNER TO postgres;

--
-- Name: clarity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clarity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clarity_id_seq OWNER TO postgres;

--
-- Name: clarity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clarity_id_seq OWNED BY public.clarity.id;


--
-- Name: color; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.color (
    id integer NOT NULL,
    color_type character varying(4) NOT NULL,
    "priceId" integer
);


ALTER TABLE public.color OWNER TO postgres;

--
-- Name: color_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.color_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.color_id_seq OWNER TO postgres;

--
-- Name: color_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.color_id_seq OWNED BY public.color.id;


--
-- Name: cut; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cut (
    id integer NOT NULL,
    cut_type character varying(14) NOT NULL,
    "priceId" integer
);


ALTER TABLE public.cut OWNER TO postgres;

--
-- Name: cut_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cut_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cut_id_seq OWNER TO postgres;

--
-- Name: cut_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cut_id_seq OWNED BY public.cut.id;


--
-- Name: forms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.forms (
    id integer NOT NULL,
    form_type character varying(12) NOT NULL,
    "priceId" integer
);


ALTER TABLE public.forms OWNER TO postgres;

--
-- Name: forms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.forms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.forms_id_seq OWNER TO postgres;

--
-- Name: forms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.forms_id_seq OWNED BY public.forms.id;


--
-- Name: price; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.price (
    id integer NOT NULL,
    price numeric DEFAULT '0'::numeric NOT NULL
);


ALTER TABLE public.price OWNER TO postgres;

--
-- Name: price_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.price_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.price_id_seq OWNER TO postgres;

--
-- Name: price_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.price_id_seq OWNED BY public.price.id;


--
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO postgres;

--
-- Name: carat_weight id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carat_weight ALTER COLUMN id SET DEFAULT nextval('public.carat_weight_id_seq'::regclass);


--
-- Name: clarity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clarity ALTER COLUMN id SET DEFAULT nextval('public.clarity_id_seq'::regclass);


--
-- Name: color id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.color ALTER COLUMN id SET DEFAULT nextval('public.color_id_seq'::regclass);


--
-- Name: cut id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cut ALTER COLUMN id SET DEFAULT nextval('public.cut_id_seq'::regclass);


--
-- Name: forms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms ALTER COLUMN id SET DEFAULT nextval('public.forms_id_seq'::regclass);


--
-- Name: price id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price ALTER COLUMN id SET DEFAULT nextval('public.price_id_seq'::regclass);


--
-- Data for Name: carat_weight; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carat_weight (id, weight, "priceId") FROM stdin;
1	1	1
2	2	2
3	3	3
4	4	4
5	5	5
6	6	7
7	7	8
8	8	6
9	9	10
10	10	11
11	11	12
12	12	13
13	13	9
14	14	15
15	15	16
16	16	17
17	17	14
18	18	19
19	19	20
20	20	18
\.


--
-- Data for Name: clarity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clarity (id, clarity, "priceId") FROM stdin;
1	LC	1
2	VVS2	2
3	IF	3
4	VVS1	4
5	VS1	5
6	SI2	7
7	FL	8
8	P2	6
9	P3	10
10	VS2	9
11	SI1	14
12	P1	18
\.


--
-- Data for Name: color; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.color (id, color_type, "priceId") FROM stdin;
1	LC	1
2	VVS2	2
3	IF	3
4	VVS1	4
5	VS1	5
6	SI2	7
7	FL	8
8	VS2	9
9	SI1	14
10	P1	18
\.


--
-- Data for Name: cut; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cut (id, cut_type, "priceId") FROM stdin;
1	LC	1
2	VVS2	2
3	IF	3
4	VVS1	4
5	FL	8
\.


--
-- Data for Name: forms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.forms (id, form_type, "priceId") FROM stdin;
6	oval	18
4	shadow	10
2	heart	1
3	drop	8
1	circle	3
5	rectangle	12
7	square	13
\.


--
-- Data for Name: price; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.price (id, price) FROM stdin;
1	313
2	470
3	489
4	367
5	379
6	897
7	93
8	673
9	591
10	201
11	447
12	84
13	386
14	309
15	854
16	539
17	296
18	877
19	208
20	425
\.


--
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.typeorm_metadata (type, database, schema, "table", name, value) FROM stdin;
\.


--
-- Name: carat_weight_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carat_weight_id_seq', 20, true);


--
-- Name: clarity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clarity_id_seq', 12, true);


--
-- Name: color_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.color_id_seq', 10, true);


--
-- Name: cut_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cut_id_seq', 5, true);


--
-- Name: forms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.forms_id_seq', 7, true);


--
-- Name: price_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.price_id_seq', 20, true);


--
-- Name: clarity PK_4688269fa5004d3a8a6b04b00a1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clarity
    ADD CONSTRAINT "PK_4688269fa5004d3a8a6b04b00a1" PRIMARY KEY (id);


--
-- Name: carat_weight PK_93a848cb80f5f4af1e7b39b362f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carat_weight
    ADD CONSTRAINT "PK_93a848cb80f5f4af1e7b39b362f" PRIMARY KEY (id);


--
-- Name: forms PK_ba062fd30b06814a60756f233da; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms
    ADD CONSTRAINT "PK_ba062fd30b06814a60756f233da" PRIMARY KEY (id);


--
-- Name: cut PK_c921f4d948b68d205c2d9563473; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cut
    ADD CONSTRAINT "PK_c921f4d948b68d205c2d9563473" PRIMARY KEY (id);


--
-- Name: color PK_d15e531d60a550fbf23e1832343; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.color
    ADD CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY (id);


--
-- Name: price PK_d163e55e8cce6908b2e0f27cea4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price
    ADD CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY (id);


--
-- Name: forms REL_085e24a7b750a60d7d9db6e08b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms
    ADD CONSTRAINT "REL_085e24a7b750a60d7d9db6e08b" UNIQUE ("priceId");


--
-- Name: clarity REL_21bddf7a5ff14fef0ca6ec6e51; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clarity
    ADD CONSTRAINT "REL_21bddf7a5ff14fef0ca6ec6e51" UNIQUE ("priceId");


--
-- Name: cut REL_66fc21f18ee10081224e9b48e3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cut
    ADD CONSTRAINT "REL_66fc21f18ee10081224e9b48e3" UNIQUE ("priceId");


--
-- Name: color REL_8a2c8e88e2d6ae8a2b4c12257d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.color
    ADD CONSTRAINT "REL_8a2c8e88e2d6ae8a2b4c12257d" UNIQUE ("priceId");


--
-- Name: carat_weight REL_d59bca581e33665e7f006bb306; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carat_weight
    ADD CONSTRAINT "REL_d59bca581e33665e7f006bb306" UNIQUE ("priceId");


--
-- Name: carat_weight UQ_0da7adf866ab5793dcd52f1e37f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carat_weight
    ADD CONSTRAINT "UQ_0da7adf866ab5793dcd52f1e37f" UNIQUE (weight);


--
-- Name: forms FK_085e24a7b750a60d7d9db6e08b3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms
    ADD CONSTRAINT "FK_085e24a7b750a60d7d9db6e08b3" FOREIGN KEY ("priceId") REFERENCES public.price(id);


--
-- Name: clarity FK_21bddf7a5ff14fef0ca6ec6e51b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clarity
    ADD CONSTRAINT "FK_21bddf7a5ff14fef0ca6ec6e51b" FOREIGN KEY ("priceId") REFERENCES public.price(id);


--
-- Name: cut FK_66fc21f18ee10081224e9b48e34; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cut
    ADD CONSTRAINT "FK_66fc21f18ee10081224e9b48e34" FOREIGN KEY ("priceId") REFERENCES public.price(id);


--
-- Name: color FK_8a2c8e88e2d6ae8a2b4c12257d6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.color
    ADD CONSTRAINT "FK_8a2c8e88e2d6ae8a2b4c12257d6" FOREIGN KEY ("priceId") REFERENCES public.price(id);


--
-- Name: carat_weight FK_d59bca581e33665e7f006bb3066; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carat_weight
    ADD CONSTRAINT "FK_d59bca581e33665e7f006bb3066" FOREIGN KEY ("priceId") REFERENCES public.price(id);


--
-- PostgreSQL database dump complete
--

